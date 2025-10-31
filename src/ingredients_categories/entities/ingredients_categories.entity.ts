import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('ingredients_categories')
export class IngredientsCategory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'type_name' })
  typeName: string;
}

export type AddIngredientTypeDto = Omit<IngredientsCategory, 'id'>;

export type DeleteIngredientTypeDto = Pick<IngredientsCategory, 'id'>;
