from flask import Flask
from models import connection
from dotenv import load_dotenv
load_dotenv()

app = Flask(__name__)

import routes.index 


if __name__ == "__main__":
    connection()
    app.run(host='0.0.0.0', port=5000,debug=True)
