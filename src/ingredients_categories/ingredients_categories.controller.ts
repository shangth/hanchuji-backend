import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { ReqSucc } from '../tools/resBase';
import type {
  AddIngredientTypeDto,
  DeleteIngredientTypeDto,
  IngredientsCategory,
} from './entities/ingredients_categories.entity';
import { IngredientsCategoriesService } from './ingredients_categories.service';

@Controller('api/ingredientsCategories')
export class IngredientsCategoriesController {
  constructor(private readonly ingredientsCategoriesService: IngredientsCategoriesService) {}

  @Post('add')
  async add(@Body() createIngredientDto: AddIngredientTypeDto) {
    const result = await this.ingredientsCategoriesService.add(createIngredientDto);
    return new ReqSucc(200, result);
  }

  @Delete('delete')
  async delete(@Body() deleteIngredientDto: DeleteIngredientTypeDto) {
    const _result = await this.ingredientsCategoriesService.delete(deleteIngredientDto);
    return new ReqSucc(200, null);
  }

  @Put('update')
  async update(@Body() updateIngredientDto: IngredientsCategory) {
    const result = await this.ingredientsCategoriesService.update(updateIngredientDto);
    return new ReqSucc(200, result);
  }

  @Get('getList')
  async getList() {
    const result = await this.ingredientsCategoriesService.getList();
    return new ReqSucc(200, result);
  }
}
