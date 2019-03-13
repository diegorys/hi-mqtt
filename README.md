# Hi MQTT

First steps with MQTT with NodeJS.

## Open a terminal (1)

### Install mosquitto

$ sudo apt-get install mosquitto mosquitto-clients

### Subscribe to topic "identify"

$ mosquitto_sub -h localhost -t identify

## Open other terminal (2)

### Subscribe to topic "iam"

$ mosquitto_sub -h localhost -t iam

## Open other terminal (3)

### Publish message

$ mosquitto_pub -h localhost -t identify -m "Who are you?"

## Open other terminal (4)

### Install this proyect

$ npm install

### Run this project

$ npm start

### Test

Go to terminal (3) and publish the message topic again.

Check the terminals (1) and (2) and verify that the messages has been sended.

Go to terminal (3) and publish next message:

$ mosquitto_pub -h localhost -t bye -m "Bye bye!"

Go to terminal (4) and verify that the program has finished.