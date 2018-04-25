import { SensorData } from '../SensorData';
import { ISensor } from '../../interface/ISensor';
import { exec } from 'child_process';

class Ds implements ISensor {
    public getData(callback: (info: SensorData) => void) {
        const devId = '28-031652d95dff';

        exec( 
            "cat /sys/bus/w1/devices/" 
            + devId 
            + "/w1_slave | grep t= | cut -f2 -d= | awk '{print $1/1000}'", 
            function( error, stdout, stderr){
                if ( error !== null ){
                    console.log( "Error: " + error);
                }

                let temperature = parseFloat(stdout);

                let sensor_data: SensorData = new SensorData({
                    id: '5a3cd59cfd037c2b5c3dec70',
                    sensor_name: 'DS18B20',
                    value: temperature,
                    unit_display: '°C',
                    unit: 'Degree Celsius',
                    type: 'Temperature',
                    timestamp: + new Date(),
                    interface: '1-Wire'
                });
                
                callback(sensor_data);
        });
    }
}

export { Ds };