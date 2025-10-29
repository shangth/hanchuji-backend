import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT ?? 3333;
  await app.listen(port);
  console.log(`🚀 服务已启动，运行在端口: ${port}`);
}
bootstrap();
