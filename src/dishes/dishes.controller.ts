import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { ReqSucc } from '../tools/resBase';
import { DishesService } from './dishes.service';
import type { AddDishDto, DeleteDishDto, UpdateDishDto } from './entities/dish.entity';

@Controller('api/dishes')
export class DishesController {
  constructor(private readonly dishesService: DishesService) {}

  @Post('add')
  async add(@Body() createDishDto: AddDishDto) {
    const result = await this.dishesService.add(createDishDto);
    return new ReqSucc(200, result);
  }

  @Delete('delete')
  async delete(@Body() deleteDishDto: DeleteDishDto) {
    const _result = await this.dishesService.delete(deleteDishDto);
    return new ReqSucc(200, null);
  }

  @Put('update')
  async update(@Body() updateDishDto: UpdateDishDto) {
    const result = await this.dishesService.update(updateDishDto);
    return new ReqSucc(200, result);
  }

  @Get('getList')
  async getList() {
    const result = await this.dishesService.getList();
    return new ReqSucc(200, result);
  }
}
