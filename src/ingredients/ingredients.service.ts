import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import type { Repository } from 'typeorm';
import {
  type AddIngredientDto,
  type DeleteIngredientDto,
  Ingredient,
  type UpdateIngredientDto,
} from './entities/ingredient.entity';

@Injectable()
export class IngredientsService {
  constructor(@InjectRepository(Ingredient) private ingredientRepository: Repository<Ingredient>) {}

  async add(addIngredientDto: AddIngredientDto): Promise<Ingredient> {
    const ingredient = this.ingredientRepository.create(addIngredientDto);
    return await this.ingredientRepository.save(ingredient);
  }

  async delete(deleteIngredientDto: DeleteIngredientDto): Promise<void> {
    await this.ingredientRepository.delete(deleteIngredientDto.id);
  }

  async update(updateIngredientDto: UpdateIngredientDto): Promise<Ingredient> {
    await this.ingredientRepository.update(updateIngredientDto.id, updateIngredientDto);
    const result = await this.ingredientRepository.findOne({
      where: { id: updateIngredientDto.id },
    });
    if (!result) {
      throw new Error('Ingredient not found');
    }
    return result;
  }

  async getList(): Promise<Ingredient[]> {
    return await this.ingredientRepository.find({
      relations: ['ingredientType'],
    });
  }
}
