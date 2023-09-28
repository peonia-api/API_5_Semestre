from random import choice
import string

def generate():
    characters = string.ascii_letters + string.digits
    gen2FA = ''.join(choice(characters.upper()) for i in range(6))
    return gen2FA