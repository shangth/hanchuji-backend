import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfirmedDish } from './entities/confirmed-dish.entity';
import { Gathering } from './entities/gathering.entity';
import { GatheringsController } from './gatherings.controller';
import { GatheringsService } from './gatherings.service';

@Module({
  imports: [TypeOrmModule.forFeature([Gathering, ConfirmedDish])],
  controllers: [GatheringsController],
  providers: [GatheringsService],
  exports: [GatheringsService],
})
export class GatheringsModule {}
