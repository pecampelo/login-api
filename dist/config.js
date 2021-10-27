"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
    'host': process.env.HOST || '0.0.0.0',
    'port': process.env.PORT || 8005,
    'exclusive': true,
    'backlog': process.env.BACKLOG || 2,
};
//# sourceMappingURL=config.js.map