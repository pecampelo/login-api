"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./src/server"));
const config_1 = require("./config");
server_1.default.listen(config_1.config, () => {
    console.log(`Server is listening on ${config_1.config.host}:${config_1.config.port}/`);
});
const address = server_1.default.address();
exports.default = address;
//# sourceMappingURL=app.js.map