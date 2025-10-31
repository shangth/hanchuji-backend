import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { IngredientsCategory } from '../../ingredients_categories/entities/ingredients_categories.entity';

@Entity('ingredients')
export class Ingredient {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'ingredient_name' })
  ingredientName: string;

  @Column({ name: 'type_id' })
  typeId: number;

  @ManyToOne(() => IngredientsCategory)
  @JoinColumn({ name: 'type_id' })
  ingredientType: IngredientsCategory;
}

export type AddIngredientDto = Omit<Ingredient, 'id'>;

export type DeleteIngredientDto = Pick<Ingredient, 'id'>;

export type UpdateIngredientDto = Ingredient;
