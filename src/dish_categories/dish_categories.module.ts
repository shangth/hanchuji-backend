import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DishCategoriesController } from './dish_categories.controller';
import { DishCategoriesService } from './dish_categories.service';
import { DishCategory } from './entities/dish_categories.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DishCategory])],
  controllers: [DishCategoriesController],
  providers: [DishCategoriesService],
  exports: [DishCategoriesService],
})
export class DishCategoriesModule {}
