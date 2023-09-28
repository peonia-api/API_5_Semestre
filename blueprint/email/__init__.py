import os
from blueprint.generate2FA import generate

def email_host_outlook(adm, senha, destinatario, subject, corpo):
    """
    -> Faz o envio de um email, usando o metodo SMTP!
    :param adm: Administrador, email de que vai enviar
    :param senha: Senha do administrador
    :param destinatario: Email de quem vai receber!
    :param subject: Assunto do email
    :param corpo: Conteudo do email 
    """


    import smtplib
    from email.mime.multipart import MIMEMultipart
    from email.mime.text import MIMEText

    try:
      # startar o servidar SMTP
        if adm.find('gmail') >= 0:
            host = "smtp.gmail.com"
            port = "587"
        else:
        # startar o servidar SMTP
            host = "smtp.office365.com"
            port = "587"
        
        login = f"{adm}"
        senha = f"{senha}"

        server = smtplib.SMTP(host, port)

        server.ehlo()
        server.starttls()
        server.login(login,senha)
    except TypeError:
        return False
    except AttributeError:
        return False
    except smtplib.SMTPAuthenticationError:
        erro = 'ERRO! Por favor desative o recurso de segurança do seu email!'
        return erro
        
        # construir o email tipo MINE
    else:
        corpo1 = f"{corpo}"
        email_msg = MIMEMultipart()
        email_msg['From'] = login
        email_msg['To'] = destinatario
        email_msg['Subject'] = f"{subject}"
        email_msg.attach(MIMEText(corpo1, 'html'))

        # enviar o email tipo MIME no servidor SMTP
        server.sendmail(email_msg['From'], email_msg['To'], email_msg.as_string())

        server.quit()
        return True

#-----------------------------------------------------


				
def email(userEmail):
    from models import insert2FAEmail
    try:
        generate2fa = generate()
        email = os.getenv("email")
        ddd = os.getenv("senha")
        corpo = f"""
            <p>Olá,</p>

            <p>Este é o seu código de autenticação de 2FA: </p>
            <br/>
            <h1>{generate2fa}</h1>
            <br/>
            <p>Use este código para concluir o processo de autenticação de dois fatores em nossa aplicação.</p>

            <p>Atenciosamente,</p>
            <p>APP</p>
        """

        
        email_host_outlook(email, ddd, userEmail, 'Authenticator 2FA', corpo)
        insert2FAEmail(userEmail, generate2fa)
        return True
    except AttributeError:
        return False

    else:
        return False
    