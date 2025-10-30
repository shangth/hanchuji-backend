import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GatheringsModule } from './gatherings/gatherings.module';
import { databaseConfig } from './config/database.config';
import { UsersModule } from './users/users.module';
import { DishesModule } from './dishes/dishes.module';
import { LikesModule } from './likes/likes.module';
import { IngredientsModule } from './ingredients/ingredients.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(databaseConfig),
    GatheringsModule,
    UsersModule,
    DishesModule,
    LikesModule,
    IngredientsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
