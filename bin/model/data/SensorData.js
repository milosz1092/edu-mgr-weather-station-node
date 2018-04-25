"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SensorData {
    constructor(data) {
        this.id = data.id;
        this.type = data.type;
        this.unit = data.unit;
        this.unit_display = data.unit_display;
        this.value = data.value;
        this.timestamp = data.timestamp;
        this.sensor_name = data.sensor_name;
        this.interface = data.interface;
    }
}
exports.SensorData = SensorData;
//# sourceMappingURL=SensorData.js.map