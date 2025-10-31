import type { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const databaseConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '3306', 10),
  username: process.env.DB_USERNAME || 'root',
  password: process.env.DB_PASSWORD || '123456789',
  database: process.env.DB_DATABASE || 'hanchuji',
  autoLoadEntities: true,
  synchronize: true, // 启用自动同步，自动创建表结构
};
