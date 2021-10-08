import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import configuration from './config/configuration';
import { User } from './users/dto/users.entity.dto';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { TokensModule } from './tokens/tokens.module';
import { Token } from './tokens/dto/tokens.entity.dto';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'ahmadkybora',
      password: '09392141724abc',
      database: 'nestjs_project_5',
      entities: [User, Token],
      synchronize: true,
    }),
    UsersModule,
    AuthModule,
    TokensModule,
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
