import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GatheringsService } from './gatherings.service';
import { GatheringsController } from './gatherings.controller';
import { Gathering } from './entities/gathering.entity';
import { ConfirmedDish } from './entities/confirmed-dish.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Gathering, ConfirmedDish])],
  controllers: [GatheringsController],
  providers: [GatheringsService],
  exports: [GatheringsService],
})
export class GatheringsModule {}
