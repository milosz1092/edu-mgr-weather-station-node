"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SensorData_1 = require("../SensorData");
const child_process_1 = require("child_process");
class Tsl {
    getData(callback) {
        let pull = 1000;
        let iteration = 10;
        child_process_1.exec("/media/usb/Repositories/edu-mgr-sensor-c/light " + pull + " " + iteration + "", function (error, stdout, stderr) {
            if (error !== null) {
                console.log("Error: " + error);
            }
            let illumination = parseFloat(stdout);
            let sensor_data = new SensorData_1.SensorData({
                id: '5a3c097fb50e8013845a6981',
                sensor_name: 'TSL235',
                value: illumination,
                unit_display: 'kHz',
                unit: 'Kilohertz',
                type: 'Illumination',
                timestamp: +new Date(),
                interface: 'GPIO'
            });
            callback(sensor_data);
        });
    }
}
exports.Tsl = Tsl;
//# sourceMappingURL=Tsl.js.map