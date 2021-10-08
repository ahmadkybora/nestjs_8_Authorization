"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersModule = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const users_controller_1 = require("./users.controller");
const typeorm_1 = require("@nestjs/typeorm");
const users_repository_dto_1 = require("./dto/users.repository.dto");
const is_admin_middlewares_1 = require("../middlewares/is-admin.middlewares");
const is_logged_in_middlewares_1 = require("../middlewares/is-logged-in.middlewares");
let UsersModule = class UsersModule {
    configure(consumer) {
        consumer
            .apply(is_logged_in_middlewares_1.IsLoggedInMiddleware, is_admin_middlewares_1.IsAdminMiddleware)
            .forRoutes(users_controller_1.UsersController);
    }
};
UsersModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([users_repository_dto_1.UserRepository])],
        providers: [users_service_1.UsersService],
        controllers: [users_controller_1.UsersController],
    })
], UsersModule);
exports.UsersModule = UsersModule;
//# sourceMappingURL=users.module.js.map