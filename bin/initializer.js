"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Config_1 = require("./config/Config");
class initializer {
    static Init() {
        console.log('Yes!!!!!!!!!!');
        let config = new Config_1.Config();
        config.Init();
        console.log(Config_1.Config.data);
    }
}
exports.initializer = initializer;
//# sourceMappingURL=initializer.js.map