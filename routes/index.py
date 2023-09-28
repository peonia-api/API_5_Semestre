from __main__ import app

from flask import jsonify
from models import connection
from blueprint.email import email
from models import getAuth

@app.route('/auth2fa_email/<emailUser>', methods=["GET", "POST"])
def enviarEmail(emailUser):
    e = email(emailUser)
    if e == True:
        return jsonify({"menssage":'Email enviado!', "status": 200})
    elif e == False:
        return jsonify({"menssage":'ERRO! Verfique se os campos foram colocados com informações corretas!', "status": 400})

@app.route('/auth2fa/getEmail/<email>/<cod>')
def getCod2FA(email, cod):
    return jsonify(getAuth(email, 'email', cod)) # Vai retornar null se não encontrar 


@app.route('/auth2fa_sms/<number>', methods=["GET", "POST"])
def enviarSMS(number):
    from blueprint.sms import sms
    smsEnvia = sms(number)
    if smsEnvia == True:
        return jsonify({"status": 200, "message": "SMS enviado!"})
    else:
        return jsonify({"status": 400, "message": "SMS não enviado"})
    

@app.route('/auth2fa/getSMS/<sms>/<cod>')
def getCod2FASMS(sms, cod):
    return jsonify(getAuth(sms, 'sms', cod)) # Vai retornar null se não encontrar 