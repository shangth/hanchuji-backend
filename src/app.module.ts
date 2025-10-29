import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GatheringsModule } from './gatherings/gatherings.module';

@Module({
  imports: [GatheringsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
