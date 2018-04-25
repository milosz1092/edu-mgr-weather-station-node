"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const fs = require("fs");
class Config {
    static Update() {
        const env = process.env.NODE_ENV || 'development';
        const config = JSON.parse(fs.readFileSync(path.join(__dirname, '../../config.json'), 'UTF-8'));
        Config.data = config[env];
    }
}
Config.data = null;
exports.Config = Config;
//# sourceMappingURL=Config.js.map