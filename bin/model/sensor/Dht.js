"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SensorData_1 = require("../SensorData");
const RaspiSensors = require('raspi-sensors');
class Dht {
    constructor() {
        this.DHT22 = new RaspiSensors.Sensor({
            type: "DHT22",
            pin: 0X6
        }, "DHT22");
    }
    getData(callback) {
        this.DHT22.fetch((err, data) => {
            if (err) {
                console.error("An error occured!");
                console.error(err.cause);
                return;
            }
            if (data.type === 'Temperature') {
                data.id = '5a3cd5acfd037c2b5c3dec72';
            }
            else if (data.type === 'Humidity') {
                data.id = '5a3cd5a3fd037c2b5c3dec71';
            }
            data.interface = 'GPIO';
            let sensor_data = new SensorData_1.SensorData(data);
            callback(sensor_data);
        });
    }
}
exports.Dht = Dht;
//# sourceMappingURL=Dht.js.map