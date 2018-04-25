import { SensorData } from '../model/SensorData';

interface ISensor {
    getData(callback: (info: SensorData) => void);
}

export { ISensor };