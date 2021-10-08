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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const typeorm_1 = require("@nestjs/typeorm");
const users_entity_dto_1 = require("../users/dto/users.entity.dto");
const auth_repository_dto_1 = require("./dto/auth.repository.dto");
const bcrypt = require("bcrypt");
const tokens_entity_dto_1 = require("../tokens/dto/tokens.entity.dto");
const create_tokens_dto_1 = require("../tokens/dto/create-tokens.dto");
const jwt = require("jsonwebtoken");
let AuthService = class AuthService {
    constructor(authRepository, jwtService) {
        this.authRepository = authRepository;
        this.jwtService = jwtService;
    }
    async login(loginUsersDto) {
        const { username, password } = loginUsersDto;
        const user = await users_entity_dto_1.User.findOne({
            where: {
                username: username
            }
        });
        if (user && (await bcrypt.compare(password, user.password))) {
            console.log();
            const accessToken = jwt.sign({
                username: user.username,
                id: user.id,
            }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '2h' });
            console.log(process.env.ACCESS_TOKEN_SECRET);
            const token = await tokens_entity_dto_1.Token.findOne({
                where: {
                    userId: user.id
                }
            });
            if (token) {
                await tokens_entity_dto_1.Token.update({
                    token: accessToken,
                    userId: user.id,
                    isRevoke: false,
                }, {
                    userId: user.id,
                });
            }
            else {
                const token = await tokens_entity_dto_1.Token.create({
                    token: accessToken,
                    userId: user.id,
                    isRevoke: false,
                }).save();
            }
            return {
                first_name: user.first_name,
                last_name: user.last_name,
                username: user.username,
                accessToken: accessToken,
            };
        }
        else {
            throw new common_1.UnauthorizedException('your data is not match');
        }
    }
    async register(registerUsersDto) {
        return await this.authRepository.register(registerUsersDto);
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(auth_repository_dto_1.AuthRepository)),
    __metadata("design:paramtypes", [auth_repository_dto_1.AuthRepository,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map