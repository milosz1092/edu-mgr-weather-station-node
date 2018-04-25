"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Initializer_1 = require("./config/Initializer");
const DataSchema_1 = require("./model/schema/DataSchema");
const Dht_1 = require("./model/sensor/Dht");
const Bmp_1 = require("./model/sensor/Bmp");
const Tsl_1 = require("./model/sensor/Tsl");
const Ds_1 = require("./model/sensor/Ds");
process.send('running');
process.on('SIGTERM', () => {
    process.send('terminated by parent');
    process.exit();
});
Initializer_1.Initializer.Init();
let Sensors = [
    new Dht_1.Dht(),
    new Bmp_1.Bmp(),
    new Tsl_1.Tsl(),
    new Ds_1.Ds()
];
(function loop() {
    for (let sensor of Sensors) {
        sensor.getData((read) => {
            let data = new DataSchema_1.DataSchema({
                sensor: read.id,
                timestamp: read.timestamp,
                value: read.value
            });
            data.save(function (err) {
                if (err)
                    throw err;
            });
        });
    }
    process.send('database updated');
    setTimeout(loop, 1800000);
})();
//# sourceMappingURL=index.js.map