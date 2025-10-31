import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('dish_categories')
export class DishCategory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}

export type AddDishCategoryDto = Omit<DishCategory, 'id'>;

export type DeleteDishCategoryDto = Pick<DishCategory, 'id'>;
