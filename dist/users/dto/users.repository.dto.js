"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const typeorm_1 = require("typeorm");
const common_1 = require("@nestjs/common");
const users_entity_dto_1 = require("./users.entity.dto");
const bcrypt = require("bcrypt");
let UserRepository = class UserRepository extends typeorm_1.Repository {
    async getAllUser() {
        return await users_entity_dto_1.User.find({});
    }
    async createUser(createUserDto) {
        const { first_name, last_name, username, email, password, mobile, home_phone, work_phone, home_address, work_address, image, } = createUserDto;
        const user = new users_entity_dto_1.User();
        user.first_name = first_name;
        user.last_name = last_name;
        user.username = username;
        user.email = email;
        user.password = password;
        user.mobile = mobile;
        user.home_phone = home_phone;
        user.work_phone = work_phone;
        user.home_address = home_address;
        user.work_address = work_address;
        user.image = image;
        await this.save(user);
        return user;
    }
    async getUserById(id) {
        return await this.findOne(id);
    }
    async updateUser(id, updateUserDto) {
        const { first_name, last_name, username, email, password, mobile, home_phone, work_phone, home_address, work_address, image, } = updateUserDto;
        const user = await this.findOne(id);
        user.first_name = first_name;
        user.last_name = last_name;
        user.username = username;
        user.email = email;
        user.password = password;
        user.mobile = mobile;
        user.home_phone = home_phone;
        user.work_phone = work_phone;
        user.home_address = home_address;
        user.work_address = work_address;
        user.image = image;
        await this.save(user);
        return user;
    }
    async login(loginUsersDto) {
        const { username, password } = loginUsersDto;
        const user = await users_entity_dto_1.User.findOne({ username });
        if (user && (await bcrypt.compare(password, user.password))) {
            return user;
        }
        else {
            throw new common_1.UnauthorizedException('your data is not match');
        }
    }
    async register(registerUsersDto) {
        const { first_name, last_name, username, email, password, mobile, home_phone, work_phone, home_address, work_address, image, } = registerUsersDto;
        const user = new users_entity_dto_1.User();
        user.first_name = first_name;
        user.last_name = last_name;
        user.username = username;
        user.email = email;
        user.password = password;
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
UserRepository = __decorate([
    (0, typeorm_1.EntityRepository)(users_entity_dto_1.User)
], UserRepository);
exports.UserRepository = UserRepository;
//# sourceMappingURL=users.repository.dto.js.map