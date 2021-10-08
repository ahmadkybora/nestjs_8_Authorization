"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ACCESS_TOKEN_SECRET = void 0;
exports.ACCESS_TOKEN_SECRET = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9eyJ1c2VybmFtZSI6Imt5Ym9yYV8xIiwiaWQiOjEsImlhdCI6MTYzMzYzMDI1MywiZXhwIjoxNjMzNjMwMzEzfQ';
exports.default = () => ({
    port: parseInt(process.env.PORT, 10) || 3000,
    database: {
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT, 10) || 3306,
        database: process.env.DB_DATABASE,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
    },
});
//# sourceMappingURL=configuration.js.map