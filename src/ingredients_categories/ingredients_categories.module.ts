import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IngredientsCategory } from './entities/ingredients_categories.entity';
import { IngredientsCategoriesController } from './ingredients_categories.controller';
import { IngredientsCategoriesService } from './ingredients_categories.service';

@Module({
  imports: [TypeOrmModule.forFeature([IngredientsCategory])],
  controllers: [IngredientsCategoriesController],
  providers: [IngredientsCategoriesService],
  exports: [IngredientsCategoriesService],
})
export class IngredientsCategoriesModule {}
