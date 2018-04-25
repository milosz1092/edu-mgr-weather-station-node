"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SensorData_1 = require("../SensorData");
const RaspiSensors = require('raspi-sensors');
class Bmp {
    constructor() {
        this.BMP180 = new RaspiSensors.Sensor({
            type: "BMP180",
            address: 0X77
        }, "BMP180");
    }
    getData(callback) {
        this.BMP180.fetch((err, data) => {
            if (err) {
                console.error("An error occured!");
                console.error(err.cause);
                return;
            }
            if (data.type === 'Temperature') {
                data.id = '5a3cd586fd037c2b5c3dec6e';
            }
            else if (data.type === 'Pressure') {
                data.id = '5a3cd596fd037c2b5c3dec6f';
            }
            data.interface = 'I²C';
            let sensor_data = new SensorData_1.SensorData(data);
            callback(sensor_data);
        });
    }
}
exports.Bmp = Bmp;
//# sourceMappingURL=Bmp.js.map