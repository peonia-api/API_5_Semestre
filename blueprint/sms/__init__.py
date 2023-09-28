def sms(number):
    try:
        import os
        from twilio.rest import Client
        from blueprint.generate2FA import generate
        from models import insert2FASMS

        # Find your Account SID and Auth Token at twilio.com/console
        # and set the environment variables. See http://twil.io/secure
        account_sid = os.getenv('TWILIO_ACCOUNT_SID')
        auth_token = os.getenv('TWILIO_AUTH_TOKEN')
        client = Client(account_sid, auth_token)

        codGen = generate()

        message = client.messages \
            .create(
                from_=os.getenv('NUMBER'),
                body=f'Seu código de verificação é: {codGen}',
                to=f'{number}'
            )
        insert2FASMS(number, codGen)
        print(message.sid)
        return True
    except Exception as e:
        return False