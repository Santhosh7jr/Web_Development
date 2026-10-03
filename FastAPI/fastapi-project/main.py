from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

"""
@app.get("/")
def home():
  return {
    "message" : "my First API is working."
  }

@app.get("/about")
def about():
  return {
    "message" : "This is an about page"
  }

@app.get("/customer")
def customer_details(cid: int, name: str):
  #format -> url?cid=constant&name=...
  return {
    "customer_id" : cid,
    "name" : name,
    "age" : 22
  }
"""

"""
class CustomerInformation(BaseModel):
  age : int
  income : float
  name : str

@app.post("/customerInfo")
def provideInfo(info: CustomerInformation):

  decision = ""

  if info.income > 50000:
    decision = "Experienced"
  else:
    decision = "Beginner"

  return {
    "Employment Status" : decision
  }
"""


