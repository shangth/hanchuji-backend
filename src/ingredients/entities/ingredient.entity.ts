import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { IngredientType } from './ingredient-type.entity';

@Entity('ingredients_list')
export class Ingredient {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'ingredient_name' })
  ingredientName: string;

  @Column({ name: 'type_id' })
  typeId: number;

  @ManyToOne(() => IngredientType)
  @JoinColumn({ name: 'type_id' })
  ingredientType: IngredientType;
}
