import { EntityRepository, Repository } from 'typeorm';
import { Token } from './tokens.entity.dto';

@EntityRepository(Token)
export class TokenRepository extends Repository<Token> {}
