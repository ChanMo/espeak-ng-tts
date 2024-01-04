import subprocess as sp
from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/tts', methods=['POST'])
def tts():
    text = request.json.get('text')
    sp.run(['espeak-ng', text, '-g', '15', '-s', '200'], check=False)
    return {'success':True}
