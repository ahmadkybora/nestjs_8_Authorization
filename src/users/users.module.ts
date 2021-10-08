import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './dto/users.repository.dto';
import { IsAdminMiddleware } from 'src/middlewares/is-admin.middlewares';
import { IsLoggedInMiddleware } from 'src/middlewares/is-logged-in.middlewares';

@Module({
  imports: [TypeOrmModule.forFeature([UserRepository])],
  providers: [UsersService],
  controllers: [UsersController],
})

export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(IsLoggedInMiddleware, IsAdminMiddleware)
      .forRoutes(UsersController);
  }
}

//export class UsersModule {}
