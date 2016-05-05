import RPi.GPIO as GPIO
import time

triggerPin = 18
echoPin = 23

GPIO.setmode(GPIO.BCM)
GPIO.setup(triggerPin, GPIO.OUT)
GPIO.setup(echoPin, GPIO.IN)

def sendTriggerPulse():
	GPIO.output(triggerPin, True)
	time.sleep(0.0001)
	GPIO.output(triggerPin, False)

def waitForEcho(value, timeout):
	count = timeout
	while GPIO.input(echoPin) != value and count > 0:
		count = count - 1

def getDistance():
	sendTriggerPulse()
	waitForEcho(True, 10000)
	start = time.time()
	waitForEcho(False, 10000)
	finish = time.time()
	pulse_len = finish - start
	distanceCM = pulse_len / 0.000058
	distanceMeters = distanceCM / 100
	print("Distance: {} meters".format(distanceMeters))
	return distanceMeters
