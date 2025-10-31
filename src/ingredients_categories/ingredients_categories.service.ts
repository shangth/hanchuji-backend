import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import type { Repository } from 'typeorm';
import {
  type AddIngredientTypeDto,
  type DeleteIngredientTypeDto,
  IngredientsCategory,
} from './entities/ingredients_categories.entity';

@Injectable()
export class IngredientsCategoriesService {
  constructor(
    @InjectRepository(IngredientsCategory)
    private ingredientTypeRepository: Repository<IngredientsCategory>,
  ) {}

  async add(createIngredientTypeDto: AddIngredientTypeDto): Promise<IngredientsCategory> {
    const ingredientType = this.ingredientTypeRepository.create(createIngredientTypeDto);
    return await this.ingredientTypeRepository.save(ingredientType);
  }

  async delete(deleteIngredientTypeDto: DeleteIngredientTypeDto): Promise<void> {
    await this.ingredientTypeRepository.delete(deleteIngredientTypeDto.id);
  }

  async update(updateIngredientTypeDto: IngredientsCategory): Promise<IngredientsCategory> {
    await this.ingredientTypeRepository.update(updateIngredientTypeDto.id, updateIngredientTypeDto);
    return (await this.ingredientTypeRepository.findOne({
      where: { id: updateIngredientTypeDto.id },
    })) as IngredientsCategory;
  }

  async getList(): Promise<IngredientsCategory[]> {
    return (await this.ingredientTypeRepository.find()) as IngredientsCategory[];
  }
}
