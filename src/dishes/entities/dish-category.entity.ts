import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('dish_categories')
export class DishCategory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
