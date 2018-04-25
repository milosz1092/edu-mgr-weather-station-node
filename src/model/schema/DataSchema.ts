import { Schema, model } from 'mongoose';

const dataSchema: Schema = new Schema(
    {
        sensor: { type: Schema.Types.ObjectId, ref: 'sensor', required: true },
        timestamp: { type: Number, required: true},
        value: { type: Number, required: true }
    }, 
    { 
        collection: 'data',
        versionKey: false
    }
);

let DataSchema: model = model('data', dataSchema);

export { DataSchema };