from flask import Flask, Response, request
from RPi import GPIO

app = Flask("RovIR WEB")

GPIO.setmode(GPIO.BCM)

PWM_RIGHT = 4
PWM_LEFT = 14
IN1 = 6
IN2 = 8
IN3 = 11
IN4 = 25

GPIO.setup(IN1,GPIO.OUT)
GPIO.setup(IN2,GPIO.OUT)
GPIO.setup(IN3,GPIO.OUT)
GPIO.setup(IN4,GPIO.OUT)

GPIO.setup(PWM_RIGHT,GPIO.OUT)
GPIO.setup(PWM_LEFT,GPIO.OUT)

@app.route("/<path:p>")
def serve_static(p):
    return app.send_static_file(p)

@app.route("/")
def serve_page():
    return serve_static("index.html")


@app.route("/Forward")
def api_forward():
    #Code that make the rover go Forward
    GPIO.output(IN1,GPIO.LOW) 
    GPIO.output(IN2,GPIO.LOW)
    GPIO.output(IN3,GPIO.HIGH)
    GPIO.output(IN4,GPIO.HIGH)
    GPIO.output(PWM_RIGHT,GPIO.HIGH)
    GPIO.output(PWM_LEFT,GPIO.HIGH)
    return Response("OK", mimetype="text/plain; charset=utf-8", headers={"Cache-Control":"no-cache"})


@app.route("/Back")
def api_back():
    #Code that make the rover go back
    GPIO.output(IN1,GPIO.LOW)
    GPIO.output(IN2,GPIO.HIGH)
    GPIO.output(IN3,GPIO.HIGH)
    GPIO.output(IN4,GPIO.LOW)
    GPIO.output(PWM_RIGHT,GPIO.HIGH)
    GPIO.output(PWM_LEFT,GPIO.HIGH)
    return Response("OK", mimetype="text/plain; charset=utf-8", headers={"Cache-Control":"no-cache"})


@app.route("/Stop")
def api_stop():
    #Code that make the rover stop
    GPIO.output(IN1,GPIO.LOW)
    GPIO.output(IN2,GPIO.LOW)
    GPIO.output(IN3,GPIO.LOW)
    GPIO.output(IN4,GPIO.LOW)
    GPIO.output(PWM_RIGHT,GPIO.HIGH)
    GPIO.output(PWM_LEFT,GPIO.HIGH)
    return Response("OK", mimetype="text/plain; charset=utf-8", headers={"Cache-Control":"no-cache"})

@app.route("/TurnRight")
def api_turnRight():
    #Code that make the rover turn right
    GPIO.output(IN1,GPIO.LOW)
    GPIO.output(IN2,GPIO.HIGH)
    GPIO.output(IN3,GPIO.HIGH)
    GPIO.output(IN4,GPIO.LOW)
    GPIO.output(PWM_RIGHT,GPIO.HIGH)
    GPIO.output(PWM_LEFT,GPIO.HIGH)
    return Response("OK", mimetype="text/plain; charset=utf-8", headers={"Cache-Control":"no-cache"})
d
@app.route("/TurnLeft")
def api_turnLeft():
    #Code that make the rover turn left
    GPIO.output(IN1,GPIO.HIGH)
    GPIO.output(IN2,GPIO.LOW)
    GPIO.output(IN3,GPIO.LOW)
    GPIO.output(IN4,GPIO.HIGH)
    GPIO.output(PWM_RIGHT,GPIO.HIGH)
    GPIO.output(PWM_LEFT,GPIO.HIGH)
    return Response("OK", mimetype="text/plain; charset=utf-8", headers={"Cache-Control":"no-cache"})