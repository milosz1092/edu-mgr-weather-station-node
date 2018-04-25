import { Initializer } from './config/Initializer';

import { ISensor } from './interface/ISensor';
import { SensorData } from './model/SensorData';
import { DataSchema } from './model/schema/DataSchema';

import { Dht } from './model/sensor/Dht';
import { Bmp } from './model/sensor/Bmp';
import { Tsl } from './model/sensor/Tsl';
import { Ds } from './model/sensor/Ds';

process.send('running');

process.on('SIGTERM', () => {
    process.send('terminated by parent');
    process.exit() 
});


Initializer.Init();

let Sensors: ISensor[] = [
    new Dht(),
    new Bmp(),
    new Tsl(),
    new Ds()
];

(function loop() {
    for (let sensor of Sensors) {
        sensor.getData((read: SensorData) => {
            let data = new DataSchema({
                sensor: read.id,
                timestamp: read.timestamp,
                value: read.value
            });

            data.save(function(err) {
                if (err) throw err;
            });
        })
    }
    process.send('database updated');
    setTimeout(loop, 1800000); // 30min
})();


//Initializer.Revoke();
