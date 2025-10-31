import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { ReqSucc } from '../tools/resBase';
import type {
  AddIngredientDto,
  DeleteIngredientDto,
  UpdateIngredientDto,
} from './entities/ingredient.entity';
import { IngredientsService } from './ingredients.service';

@Controller('/api/ingredients')
export class IngredientsController {
  constructor(private readonly ingredientsService: IngredientsService) {}

  @Post('add')
  async add(@Body() addIngredientDto: AddIngredientDto) {
    const result = await this.ingredientsService.add(addIngredientDto);
    return new ReqSucc(200, result);
  }

  @Delete('delete')
  async delete(@Body() deleteIngredientDto: DeleteIngredientDto) {
    const _result = await this.ingredientsService.delete(deleteIngredientDto);
    return new ReqSucc(200, null);
  }

  @Put('update')
  async update(@Body() updateIngredientDto: UpdateIngredientDto) {
    const result = await this.ingredientsService.update(updateIngredientDto);
    return new ReqSucc(200, result);
  }

  @Get('getList')
  async getList() {
    const result = await this.ingredientsService.getList();
    return new ReqSucc(200, result);
  }
}
