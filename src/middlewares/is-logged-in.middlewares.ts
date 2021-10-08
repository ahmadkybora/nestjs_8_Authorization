import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";
import { User } from '../users/dto/users.entity.dto';
import { JwtService } from '@nestjs/jwt';
import * as jwt from 'jsonwebtoken';
import { Token } from '../tokens/dto/tokens.entity.dto';

@Injectable()
export class IsLoggedInMiddleware implements NestMiddleware {
    //constructor(private readonly jwtService: JwtService) {}

    async use(req: Request, res: Response, next: NextFunction) {
        //console.log(req);
    const authHeader = req.headers['authorization'];
    //console.log(authHeader);
    if (authHeader === null) {
        return res.json({
            state: true,
            message: "unAuthorized!",
            data: null,
            errors: null
        });
    }

    const token = authHeader && authHeader.split(' ')[1];
    //console.log(token);
    let result = jwt.decode(token);
    const user = await Token.findOne({
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
    } else {
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
            //console.log(user);
            if (err) {
                console.log(err);
                console.log(user);
                //req.body = user;
                //next();
                return res.status(401).json({
                    state: true,
                    message: "unAuthorized!",
                    data: null,
                    errors: null
                });
            } else {
                req.body = user;
                next();
            }
        })
    }
}
}