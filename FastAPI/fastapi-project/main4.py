from fastapi import FastAPI, HTTPException

app = FastAPI()

students = {
  "S001" : {"name" : "Ravi", "marks" : 72, "grade" : "B"},
  "S002" : {"name" : "Kishan", "marks" : 99, "grade" : "A"}
}

@app.get("/student/{student_id}")
def get_student(student_id: str):

  if student_id not in students:
    raise HTTPException (
      status_code = 404,
      detail = f"student id {student_id} not found!"
    )

  return students[student_id]
