from fastapi import FastAPI

app = FastAPI()

customers_db = {
  101 : {"name" : "Vaishnav", "age" : 20, "regular" : True},
  102 : {"name" : "Vaibhav", "age" : 25, "regular" : False},
  103 : {"name" : "Vishnu", "age" : 27, "regular" : True},
  104 : {"name" : "Vamshi", "age" : 22, "regular" : True}
}

@app.get("/customer")
def customer():
  return {
    "message" : "Success. Customer found!" 
  }

@app.get("/customer/{c_id}")
def customer_info(c_id: int):

  if c_id not in customers_db:
    return {
      "error" : "Customer not found."
    }

  else:
    return customers_db[c_id]