# SmartMirror
A Smart Mirror inspired by Michael Teeuw http://michaelteeuw.nl/post/80391333672/magic-mirror-part-i-the-idea-the-mirror

To capture images, run capture-positives.py on your Raspberry Pi, with the Pi Camera installed. Once you have captured several images, run train.py and OpenCV will write a training.xml file and mean/eigenfaces.

I modified and used code from Michael Teeuw's mirror implementation for the New York Times newsfeed module.

I used Google's API for fetching Google Calendar events.

For facial recognition, I modified and used code from OpenCV and Tony DiCola's tutorial https://learn.adafruit.com/raspberry-pi-face-recognition-treasure-box/overview

![](https://github.com/rdespoiu/SmartMirror/raw/master/IMG_24802.jpg)
