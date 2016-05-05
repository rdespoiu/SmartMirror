import cv2
import config
import face
import select
import sys
import AuthenticateJSON
import RANGEFINDER
import time

def writeFile(filename, dataToWrite):
    with open('{}.txt'.format(filename), 'w+') as file:
        for item in dataToWrite:
            file.write(item)
    


def isLetterInput(letter):
	if select.select([sys.stdin,],[],[],0.0)[0]:
		inputChar = sys.stdin.read(1)
		return inputChar.lower() == letter.lower()
	return False

def scan():
    print("Looking for face...")

    image = camera.read()
    image = cv2.cvtColor(image, cv2.COLOR_RGB2GRAY)
    result = face.detect_single(image)

    if result is None:
        print("Could not detect a single face. There may be other faces in view. Check the image in capture.pgm to see what was captured.")
        AuthenticateJSON.writeToJSON(False)
        return

    x, y, w, h = result
    crop = face.resize(face.crop(image, x, y, w, h))
    label, confidence = model.predict(crop)
            
    positiveId = ""

    if label == config.POSITIVE_LABEL:
        positiveId = "POSITIVE"
    else:
        positiveId = "NEGATIVE"

    print('Predicted {0} face with confidence {1} (Lower number is higher confidence).'.format(positiveId, confidence))

    if label == config.POSITIVE_LABEL and confidence < config.POSITIVE_THRESHOLD:
        AuthenticateJSON.writeToJSON(True)
        print('Face recognized. Access granted.')
        print('Timeout for 30 seconds commencing -- CHANGE BACK TO 30 AFTER PRESENTATION')
        print('This will allow the user to stay "authenticated" on the webserver"')
        print('Goodbye')
        time.sleep(10)
	AuthenticateJSON.writeToJSON(False)
                    
    else:
        AuthenticateJSON.writeToJSON(False)
        print('Face was unrecognized. Access denied.')


if __name__ == '__main__':
    
    #Load training data for analysis
    print("Loading training data")
    model = cv2.createEigenFaceRecognizer()
    model.load(config.TRAINING_FILE)
    print("Training data has been loaded")
    
    camera = config.get_camera()
    
    print("Application is ready")
    print("\nApplication will now start\n")

    while True:
        distance = RANGEFINDER.getDistance()
        if distance <= 2:
	    print("Prepare to scan")
            scan()
        else:
            print("Nothing in range")

        time.sleep(1)        
