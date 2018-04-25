import { ISensorData } from '../interface/ISensorData';

class SensorData implements ISensorData {
    id: string;
    type: string;
    unit: string;
    unit_display: string;
    value: number;
    timestamp: number;
    sensor_name: string;
    interface: string;

    constructor(data: ISensorData) {
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

export { SensorData };