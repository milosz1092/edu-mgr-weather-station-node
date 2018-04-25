interface ISensorData {
    id?: string;
    date?: string;
    type: string;
    unit: string;
    unit_display: string;
    value: number;
    timestamp: number;
    sensor_name: string;
    interface: string;
}

export { ISensorData };