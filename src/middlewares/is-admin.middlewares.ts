import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";
import { User } from '../users/dto/users.entity.dto';

@Injectable()
export class IsAdminMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        console.log(req.body);
        User.findOne();
        next();
    }
}