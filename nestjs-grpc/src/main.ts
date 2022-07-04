import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.GRPC,
    options: {
      url: '0.0.0.0:50051',
      package: 'book',
      protoPath: join(__dirname, 'book/book.proto'),
    },
  });
  await app.listen();
}
bootstrap();