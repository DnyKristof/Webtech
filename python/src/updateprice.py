import requests
from pprint import pprint
import json
from datetime import datetime
import os
import math
from mongodb import MongoInit
from bson import ObjectId




def updatePrice():
    mongo = MongoInit()

    url_token = "https://oauth.battle.net/token"
    client_id = "1ddf835dd2de4f6d9333278f36954ca6"
    client_secret = "GL8451kA83N7OvXBk8Nqvhyg2jAT47c1"
    realm_id = 3682

    data_token = { 
        "grant_type": "client_credentials"
    }

    auth_token = (client_id, client_secret)

    response_token = requests.post(url_token, data=data_token, auth=auth_token)
    access_token = response_token.json().get("access_token")

    url_api = f"https://eu.api.blizzard.com/data/wow/connected-realm/{realm_id}/auctions"
    url_comm_api = f"https://eu.api.blizzard.com/data/wow/auctions/commodities"
    headers_api = {
        "Authorization": f"Bearer {access_token}"
    }

    params_api = {
        "namespace": "dynamic-eu"
    }

    response_api = requests.get(url_comm_api, headers=headers_api, params=params_api)
    time = datetime.now()
    time_str = str(time).split(".")[0]

    data = response_api.json()
    data["updated"] = time_str


    with open("/src/src/data/data.json", "w") as f:
        json.dump(data, f)

    with open("/src/src/data/data.json", "r") as f:
        data = json.load(f)


    def getprice(item,ID):
        price = min([auction["unit_price"] for auction in data["auctions"] if auction["item"]["id"] == ID])/10000
        return price

    IDs = [204460,205413,208212,193230,204464,194755,194863,190321,190316,190324,200113]
    Items = ["Zaralek Glowspore","Obsidian Cobraskin","Dreaming Essence","Mireslush hide","Shadowflame Essence"
        ,"Cosmic Ink","Runed Writhebark","Awakened Fire","Awakened Earth","Awakened Order","Resonant Crystal"]
    
    prices = [getprice(name,ID) for name,ID in zip(Items,IDs)]
    amounts = [400,3,5,50,10,250,50,150,100,50,200]
    final = sum([price*amount for price,amount in zip(prices,amounts)])
    final = math.modf(final)

    Fyralath_data = {"gold":final[1],
            "silver":final[0],
            "update" : data["updated"],
            "itemprices":prices,
            "IDs" : IDs,
            "amounts" : amounts}

    Fyralath_dataDB= {"gold":final[1],
            "update" : data["updated"]
            }

    

    with open("/src/src/data/ahprices.json", "w") as f:
        json.dump(Fyralath_data, f)

    

    print(f"{time_str} : AH prices updated")

    mongo.get_collection("axe").insert_one(Fyralath_dataDB)
    
    
    return Fyralath_data


def getChartData():
    mongo = MongoInit()


    latest_72_records = mongo.get_collection("axe").find().sort("$natural", -1)

    data = []
    for record in latest_72_records:
        processed_record = {
            "gold": record.get("gold"),
            "update": record.get("update"),
            "_id": str(record.get("_id"))
        }
        data.append(processed_record)

    return data
