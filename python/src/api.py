from fastapi import Depends, FastAPI, HTTPException, status
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse,FileResponse
from fastapi_login import LoginManager
import uvicorn
import json
import math
import time
from updateprice import updatePrice,getChartData

app = FastAPI()

Fyralath_data = {}

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/update")
def test():
    Fyralath_data = updatePrice()

    return "Prices updated"

@app.get("/axe")
def Fyralath_endpoint():
    for i in range(10):
        try:
            with open("/src/src/data/ahprices.json", "r") as f:
                data = json.load(f)

            return data
        except Exception as e:
            print("Something went wrong, updating prices")
            updatePrice()
            continue
    return "Error"

@app.get("/axe/chart")
def chart_endpoint():

    return {"data" : getChartData()}
        
  




if __name__ == "__main__":
    uvicorn.run("api:app",port=7000,reload= True,host="0.0.0.0")
