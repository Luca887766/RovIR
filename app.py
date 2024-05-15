from flask import Flask, Response, request
from RPi import GPIO

app = Flask("RovIR WEB")

GPIO.setmode(GPIO.BCM)

#remove
GPIO.setup(7,GPIO.OUT)

@app.route("/<path:p>")
def serve_static(p):
    return app.send_static_file(p)

@app.route("/")
def serve_page():
    return serve_static("index.html")

@app.route("/Forward")
def api_forward():
    #Code that make the rover go Forward
    GPIO.output(7,GPIO.HIGH)
    return Response("OK", 
                    mimetype="text/plain; charset=utf-8", 
                    headers={"Cache-Control":"no-cache"})


@app.route("/Back")
def api_back():
    #doce that make the rover go back
    GPIO.output(7,GPIO.LOW)
    return Response("OK", 
                    mimetype="text/plain; charset=utf-8", 
                    headers={"Cache-Control":"no-cache"})


@app.route("/Stop")
def api_stop():
    #Code that make the rover stop
    pass

@app.route("/TurnRight")
def api_turnRight():
    #doce that make the rover turn right
    pass

@app.route("/TurnLeft")
def api_turnLeft():
    #Code that make the rover turn left
    pass
