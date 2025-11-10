import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';

export const getDatabaseConfig = (
  configService: ConfigService,
): TypeOrmModuleOptions => ({
  type: 'sqlite',
  database: configService.get<string>(
    'DATABASE_PATH',
    'apps/api/data/database.sqlite',
  ),
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['dist/migrations/*{.ts,.js}'],
  synchronize: configService.get<string>('NODE_ENV') !== 'production', // Use migrations in production
  logging: configService.get<string>('NODE_ENV') === 'development',
  dropSchema: false,
});
