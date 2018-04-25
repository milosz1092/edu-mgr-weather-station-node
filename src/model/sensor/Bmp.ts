import { SensorData } from '../SensorData';
import { ISensorData } from '../../interface/ISensorData';
import { ISensor } from '../../interface/ISensor';

const RaspiSensors = require('raspi-sensors');

class Bmp implements ISensor {
    private BMP180;

    constructor() {
        this.BMP180 = new RaspiSensors.Sensor({
            type	:	"BMP180",
            address	:	0X77
        }, "BMP180");
    }

    public getData(callback: (info: SensorData) => void) {
        this.BMP180.fetch((err, data: ISensorData) => {
            if(err) {
                console.error("An error occured!");
                console.error(err.cause);
                return;
            }
            
            if (data.type === 'Temperature') {
                data.id = '5a3cd586fd037c2b5c3dec6e';
            } else if (data.type === 'Pressure') {
                data.id = '5a3cd596fd037c2b5c3dec6f';
            }
            data.interface = 'I²C';
            let sensor_data: SensorData = new SensorData(data);

            callback(sensor_data);
        });
    }
}

export { Bmp };