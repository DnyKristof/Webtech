from pymongo import MongoClient

MONGODB_CONNSTRING = "mongodb://targonca:Szeretematejetigenesakakaotis@mongo:27017"

#"mongodb://localhost:27017"


class MongoDB:
    _initiated = None
    def __init__(self):
        self.client = MongoClient(MONGODB_CONNSTRING)
        self.database = self.client.fyralath
    def get_collection(self,collection):
        return self.database[collection]


def MongoInit():
    if MongoDB._initiated is None:
        MongoDB._initiated = MongoDB()
    return MongoDB._initiated
