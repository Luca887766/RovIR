from flask import Flask, Response, request
from RPi import GPIO

app = Flask("RovIR WEB")

GPIO.setmode(GPIO.BCM)

@app.route("/<path:p>")
def serve_static(p):
    return app.send_static_file(p)

@app.route("/")
def serve_page():
    return serve_static("index.html")

@app.route("/Forward")
def api_accendi():
    #Code that make the rover go Forward
    pass

@app.route("/Back")
def api_spegni():
    #doce that make the rover go back
    pass

@app.route("/Stop")
def api_accendi():
    #Code that make the rover stop
    pass

@app.route("/TurnRight")
def api_spegni():
    #doce that make the rover turn right
    pass

@app.route("/TurnLeft")
def api_accendi():
    #Code that make the rover turn left
    pass
