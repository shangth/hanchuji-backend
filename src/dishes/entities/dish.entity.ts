import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { DishCategory } from './dish-category.entity';

export enum DishType {
  MULTI_SERVING = 'multi_serving',
  SINGLE_SERVING = 'single_serving',
}

@Entity('dishes')
export class Dish {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ name: 'image_url' })
  imageUrl: string;

  @Column()
  category: number;

  @Column({
    type: 'enum',
    enum: DishType,
  })
  type: DishType;

  @Column({ type: 'json' })
  ingredients: any[];

  @Column({ name: 'cooking_method', type: 'text' })
  cookingMethod: string;

  @Column()
  notes: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @ManyToOne(() => DishCategory)
  @JoinColumn({ name: 'category' })
  dishCategory: DishCategory;
}
