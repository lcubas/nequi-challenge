import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  type TypeOrmModuleOptions,
  TypeOrmOptionsFactory,
} from '@nestjs/typeorm';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor(private config: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: this.config.get('DB_HOST'),
      database: this.config.get('DB_NAME'),
      username: this.config.get('DB_USER'),
      password: this.config.get('DB_PASSWORD'),
      entities: [__dirname + '/../../**/*.entity{.ts,.js}'],
      ssl: true,
    };
  }
}
