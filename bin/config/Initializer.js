"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Config_1 = require("./Config");
class Initializer {
    static Init() {
        Config_1.Config.Update();
        const db = Config_1.Config.data.database;
        mongoose.Promise = global.Promise;
        mongoose.connect(`mongodb://${db.user}:${db.password}@${db.host}:${db.port}/${db.name}?authSource=${db.auth}`, { useMongoClient: true });
    }
    static Revoke() {
        mongoose.connection.close();
    }
}
exports.Initializer = Initializer;
//# sourceMappingURL=Initializer.js.map