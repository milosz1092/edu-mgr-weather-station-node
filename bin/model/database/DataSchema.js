"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const dataSchema = new mongoose_1.Schema({
    sensor_id: { type: String, required: true },
    timestamp: { type: Number, required: true },
    value: { type: Number, required: true }
}, {
    collection: 'data',
    versionKey: false
});
let DataSchema = mongoose_1.model('Data', dataSchema);
exports.DataSchema = DataSchema;
//# sourceMappingURL=DataSchema.js.map