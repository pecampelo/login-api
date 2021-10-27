"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const server = http_1.default.createServer((req, res) => {
    // TODO: Parse URL
    // TODO: Receive body
    // 
    res.send = (statusCode, body) => {
        res.writeHead(statusCode, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(body));
    };
    if (req.method === "GET") {
        res.send(200, { 'message': 'server is online' });
    }
    else {
        res.send(404, { 'error': 'request not allowed' });
    }
    res.end();
});
exports.default = server;
//# sourceMappingURL=server.js.map