from pymongo import MongoClient
from dotenv import load_dotenv
import os

load_dotenv()

container_connstring = os.getenv("MONGODB_CONNSTRING")


class MongoDB:
    _initiated = None
    def __init__(self,connstring=container_connstring):
        self.client = MongoClient(connstring)
        self.database = self.client.fyralath
    def get_collection(self,collection):
        return self.database[collection]


def MongoInit():
    if MongoDB._initiated is None:
        MongoDB._initiated = MongoDB()
    return MongoDB._initiated

