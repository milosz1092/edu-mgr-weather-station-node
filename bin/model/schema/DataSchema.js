"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const dataSchema = new mongoose_1.Schema({
    sensor: { type: mongoose_1.Schema.Types.ObjectId, ref: 'sensor', required: true },
    timestamp: { type: Number, required: true },
    value: { type: Number, required: true }
}, {
    collection: 'data',
    versionKey: false
});
let DataSchema = mongoose_1.model('data', dataSchema);
exports.DataSchema = DataSchema;
//# sourceMappingURL=DataSchema.js.map