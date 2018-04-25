import { SensorData } from '../SensorData';
import { ISensorData } from '../../interface/ISensorData';
import { ISensor } from '../../interface/ISensor';

const RaspiSensors = require('raspi-sensors');

class Dht implements ISensor {
    private DHT22;

    constructor() {
        this.DHT22 = new RaspiSensors.Sensor({
            type	:	"DHT22",
            pin		:	0X6 
        }, "DHT22");
    }

    public getData(callback: (info: SensorData) => void) {
        this.DHT22.fetch((err, data: ISensorData) => {
            if(err) {
                console.error("An error occured!");
                console.error(err.cause);
                return;
            }


            if (data.type === 'Temperature') {
                data.id = '5a3cd5acfd037c2b5c3dec72';
            } else if (data.type === 'Humidity') {
                data.id = '5a3cd5a3fd037c2b5c3dec71';
            }
            data.interface = 'GPIO';
            let sensor_data: SensorData = new SensorData(data);

            callback(sensor_data);
        });
    }
}

export { Dht };