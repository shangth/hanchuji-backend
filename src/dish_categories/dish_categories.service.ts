import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import type { Repository } from 'typeorm';
import {
  type AddDishCategoryDto,
  type DeleteDishCategoryDto,
  DishCategory,
} from './entities/dish_categories.entity';

@Injectable()
export class DishCategoriesService {
  constructor(
    @InjectRepository(DishCategory)
    private dishCategoryRepository: Repository<DishCategory>,
  ) {}

  async add(createDishCategoryDto: AddDishCategoryDto): Promise<DishCategory> {
    const dishCategory = this.dishCategoryRepository.create(createDishCategoryDto);
    return await this.dishCategoryRepository.save(dishCategory);
  }

  async delete(deleteDishCategoryDto: DeleteDishCategoryDto): Promise<void> {
    await this.dishCategoryRepository.delete(deleteDishCategoryDto.id);
  }

  async update(updateDishCategoryDto: DishCategory): Promise<DishCategory> {
    await this.dishCategoryRepository.update(updateDishCategoryDto.id, updateDishCategoryDto);
    return (await this.dishCategoryRepository.findOne({
      where: { id: updateDishCategoryDto.id },
    })) as DishCategory;
  }

  async getList(): Promise<DishCategory[]> {
    return (await this.dishCategoryRepository.find()) as DishCategory[];
  }
}
