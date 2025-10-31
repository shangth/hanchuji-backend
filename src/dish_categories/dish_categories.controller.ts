import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { ReqSucc } from '../tools/resBase';
import { DishCategoriesService } from './dish_categories.service';
import type {
  AddDishCategoryDto,
  DeleteDishCategoryDto,
  DishCategory,
} from './entities/dish_categories.entity';

@Controller('api/dishCategories')
export class DishCategoriesController {
  constructor(private readonly dishCategoriesService: DishCategoriesService) {}

  @Post('add')
  async add(@Body() createDishCategoryDto: AddDishCategoryDto) {
    const result = await this.dishCategoriesService.add(createDishCategoryDto);
    return new ReqSucc(200, result);
  }

  @Delete('delete')
  async delete(@Body() deleteDishCategoryDto: DeleteDishCategoryDto) {
    const _result = await this.dishCategoriesService.delete(deleteDishCategoryDto);
    return new ReqSucc(200, null);
  }

  @Put('update')
  async update(@Body() updateDishCategoryDto: DishCategory) {
    const result = await this.dishCategoriesService.update(updateDishCategoryDto);
    return new ReqSucc(200, result);
  }

  @Get('getList')
  async getList() {
    const result = await this.dishCategoriesService.getList();
    return new ReqSucc(200, result);
  }
}
