from pymongo import MongoClient
import json
import datetime
import os


def connection():
    try:
        URI = os.getenv("MONGO_URL")
        client = MongoClient(URI)
        db = client['auth']  
        print("Conexão bem-sucedida ao MongoDB")
        return db
    except Exception as e:
        print(f"Erro ao conectar ao MongoDB: {str(e)}")
        return None

def insert2FAEmail(email, cod2FA):
    try:
        db = connection()
        hora_atual = datetime.datetime.now().date()
        newInsert = {
            "email" : f"{email}",
            "cod2FA" : f"{cod2FA}",
            "date": f"{hora_atual}",
        }

        db.email.insert_one(newInsert)
    except Exception as e:
        return False
    return True

def insert2FASMS(number, cod2FA):
    try:
        db = connection()
        hora_atual = datetime.datetime.now().date()
        newInsert = {
            "phone" : f"{number}",
            "cod2FA" : f"{cod2FA}",
            "date": f"{hora_atual}",
        }

        db.phone.insert_one(newInsert)
    except Exception as e:
        return False
    return True



def getAuth(element, type, cod):
    from bson import json_util
    hora_atual = datetime.datetime.now().date()
   
    """
    -> Faz a procura no mongo!
    :param element: O que eu estou procurando 
    :param type: O tipo dele ex: email
    :param cod: Código 2FA
    """
    db = connection()
    if type == 'email':
        get = db.email.find_one({"email": element, "cod2FA": cod, "date": f"{hora_atual}"})
    elif type == 'sms':
        get = db.phone.find_one({"phone": element, "cod2FA": cod, "date": f"{hora_atual}"})
    return json.loads(json_util.dumps(get))