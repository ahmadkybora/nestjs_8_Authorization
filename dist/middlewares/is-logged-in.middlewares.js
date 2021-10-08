"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsLoggedInMiddleware = void 0;
const common_1 = require("@nestjs/common");
const jwt = require("jsonwebtoken");
const tokens_entity_dto_1 = require("../tokens/dto/tokens.entity.dto");
let IsLoggedInMiddleware = class IsLoggedInMiddleware {
    async use(req, res, next) {
        const authHeader = req.headers['authorization'];
        if (authHeader === null) {
            return res.json({
                state: true,
                message: "unAuthorized!",
                data: null,
                errors: null
            });
        }
        const token = authHeader && authHeader.split(' ')[1];
        let result = jwt.decode(token);
        const user = await tokens_entity_dto_1.Token.findOne({
            where: {
                userId: result['id'],
            }
        });
        console.log(user);
        if (!user) {
            return res.json({
                state: true,
                message: "unAuthorized!",
                data: null,
                errors: null
            });
        }
        else {
            jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
                if (err) {
                    console.log(err);
                    console.log(user);
                    return res.status(401).json({
                        state: true,
                        message: "unAuthorized!",
                        data: null,
                        errors: null
                    });
                }
                else {
                    req.body = user;
                    next();
                }
            });
        }
    }
};
IsLoggedInMiddleware = __decorate([
    (0, common_1.Injectable)()
], IsLoggedInMiddleware);
exports.IsLoggedInMiddleware = IsLoggedInMiddleware;
//# sourceMappingURL=is-logged-in.middlewares.js.map