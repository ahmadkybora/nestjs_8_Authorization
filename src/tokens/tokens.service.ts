import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TokenRepository } from './dto/tokens.repository.dto';

@Injectable()
export class TokensService {
    constructor(
        @InjectRepository(TokenRepository)
        private tokenRepository: TokenRepository,
      ) {}
}
