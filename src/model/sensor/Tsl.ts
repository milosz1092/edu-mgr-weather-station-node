import { SensorData } from '../SensorData';
import { ISensor } from '../../interface/ISensor';
import { exec } from 'child_process';

class Tsl implements ISensor {
    public getData(callback: (info: SensorData) => void) {
        let pull = 1000;
        let iteration = 10;
        
        exec( "/media/usb/Repositories/edu-mgr-sensor-c/light "+pull+" "+iteration+"", function( error, stdout, stderr ){
            if ( error !== null ){
            	console.log( "Error: " + error);
            }

            let illumination = parseFloat(stdout);

            let sensor_data: SensorData = new SensorData({
                id: '5a3c097fb50e8013845a6981',
                sensor_name: 'TSL235',
                value: illumination,
                unit_display: 'kHz',
                unit: 'Kilohertz',
                type: 'Illumination',
                timestamp: + new Date(),
                interface: 'GPIO'
            });
            
            callback(sensor_data);
        });
    }
}

export { Tsl };