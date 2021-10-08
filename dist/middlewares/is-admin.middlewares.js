"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsAdminMiddleware = void 0;
const common_1 = require("@nestjs/common");
const users_entity_dto_1 = require("../users/dto/users.entity.dto");
let IsAdminMiddleware = class IsAdminMiddleware {
    use(req, res, next) {
        console.log(req.body);
        users_entity_dto_1.User.findOne();
        next();
    }
};
IsAdminMiddleware = __decorate([
    (0, common_1.Injectable)()
], IsAdminMiddleware);
exports.IsAdminMiddleware = IsAdminMiddleware;
//# sourceMappingURL=is-admin.middlewares.js.map