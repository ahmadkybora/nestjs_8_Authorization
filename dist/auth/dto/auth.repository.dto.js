"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRepository = void 0;
const common_1 = require("@nestjs/common");
const users_entity_dto_1 = require("../../users/dto/users.entity.dto");
const typeorm_1 = require("typeorm");
const bcrypt = require("bcrypt");
const users_service_1 = require("../../users/users.service");
const users_repository_dto_1 = require("../../users/dto/users.repository.dto");
const jwt_1 = require("@nestjs/jwt");
let AuthRepository = class AuthRepository extends typeorm_1.Repository {
    constructor(userRepository, jwtService) {
        super();
        this.userRepository = userRepository;
        this.jwtService = jwtService;
    }
    async login(loginUsersDto) {
        const { username, password } = loginUsersDto;
        const user = await users_entity_dto_1.User.findOne({
            where: {
                username: username
            }
        });
        console.log(user);
        if (user && (await bcrypt.compare(password, user.password))) {
            const payload = { username: user.username, sub: user.id };
            return { accessToken: this.jwtService.sign(payload), };
        }
        else {
            throw new common_1.UnauthorizedException('your data is not match');
        }
    }
    async register(registerUsersDto) {
        const { first_name, last_name, username, email, password, mobile, home_phone, work_phone, home_address, work_address, image, } = registerUsersDto;
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);
        const user = new users_entity_dto_1.User();
        user.first_name = first_name;
        user.last_name = last_name;
        user.username = username;
        user.email = email;
        user.password = hashedPassword;
        user.mobile = mobile;
        user.home_phone = home_phone;
        user.work_phone = work_phone;
        user.home_address = home_address;
        user.work_address = work_address;
        user.image = image;
        await this.save(user);
        return user;
    }
};
AuthRepository = __decorate([
    (0, typeorm_1.EntityRepository)(users_entity_dto_1.User),
    __metadata("design:paramtypes", [users_repository_dto_1.UserRepository,
        jwt_1.JwtService])
], AuthRepository);
exports.AuthRepository = AuthRepository;
//# sourceMappingURL=auth.repository.dto.js.map