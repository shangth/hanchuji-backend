import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import type { Repository } from 'typeorm';
import { type AddDishDto, type DeleteDishDto, Dish, UpdateDishDto } from './entities/dish.entity';

@Injectable()
export class DishesService {
  constructor(
    @InjectRepository(Dish)
    private dishRepository: Repository<Dish>,
  ) {}

  async add(createDishDto: AddDishDto): Promise<Dish> {
    const dish = this.dishRepository.create(createDishDto);
    return await this.dishRepository.save(dish);
  }

  async delete(deleteDishDto: DeleteDishDto): Promise<void> {
    await this.dishRepository.delete(deleteDishDto.id);
  }

  async update(updateDishDto: UpdateDishDto): Promise<Dish> {
    await this.dishRepository.update(updateDishDto.id, updateDishDto);
    return (await this.dishRepository.findOne({
      where: { id: updateDishDto.id },
    })) as Dish;
  }

  async getList(): Promise<Dish[]> {
    return (await this.dishRepository.find()) as Dish[];
  }
}
