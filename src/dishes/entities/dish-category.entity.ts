import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('dish_categories')
export class DishCategory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
