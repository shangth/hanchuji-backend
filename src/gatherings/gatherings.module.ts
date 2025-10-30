import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GatheringsService } from './gatherings.service';
import { GatheringsController } from './gatherings.controller';
import { Gathering } from './entities/gathering.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Gathering])],
  controllers: [GatheringsController],
  providers: [GatheringsService],
  exports: [GatheringsService],
})
export class GatheringsModule {}
