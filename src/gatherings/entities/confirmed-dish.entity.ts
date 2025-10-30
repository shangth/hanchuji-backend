import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Gathering } from './gathering.entity';
import { Dish } from '../../dishes/entities/dish.entity';

@Entity('confirmed_dishes')
export class ConfirmedDish {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'gathering_id' })
  gatheringId: number;

  @Column({ name: 'dish_id' })
  dishId: number;

  @Column({ name: 'user_list' })
  userList: string;

  @ManyToOne(() => Gathering)
  @JoinColumn({ name: 'gathering_id' })
  gathering: Gathering;

  @ManyToOne(() => Dish)
  @JoinColumn({ name: 'dish_id' })
  dish: Dish;
}
