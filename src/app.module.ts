import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { databaseConfig } from './config/database.config';
import { DishCategoriesModule } from './dish_categories/dish_categories.module';
import { DishesModule } from './dishes/dishes.module';
import { GatheringsModule } from './gatherings/gatherings.module';
import { IngredientsModule } from './ingredients/ingredients.module';
import { IngredientsCategoriesModule } from './ingredients_categories/ingredients_categories.module';
import { LikesModule } from './likes/likes.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(databaseConfig),
    GatheringsModule,
    UsersModule,
    DishesModule,
    LikesModule,
    IngredientsModule,
    IngredientsCategoriesModule,
    DishCategoriesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
