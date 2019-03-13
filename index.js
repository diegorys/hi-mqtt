const mqtt = require('mqtt');
const client = mqtt.connect('mqtt://localhost');

client.on('connect', () => {
    console.log("Connected " + client.connected);
    client.subscribe('bye');
    client.subscribe('identify');
});


client.on("error", (error) => {
    console.log("Can't connect " + error);
});

client.on('message', (topic, message) => {
    console.log("System: " + message.toString());
    if (topic == 'identify') {
        console.log('Me: Hi, I am Diego!');
        client.publish('iam', 'Hi, I am Diego!');
    } else if (topic == 'bye') {
        console.log("Me: Bye bye!");
        client.end();
    }
});
