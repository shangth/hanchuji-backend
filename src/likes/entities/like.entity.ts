import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Gathering } from '../../gatherings/entities/gathering.entity';
import { Dish } from '../../dishes/entities/dish.entity';
import { User } from '../../users/entities/user.entity';

@Entity('likes')
export class Like {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'gathering_id' })
  gatheringId: number;

  @Column({ name: 'dish_id' })
  dishId: number;

  @Column({ name: 'user_id' })
  userId: string;

  @ManyToOne(() => Gathering)
  @JoinColumn({ name: 'gathering_id' })
  gathering: Gathering;

  @ManyToOne(() => Dish)
  @JoinColumn({ name: 'dish_id' })
  dish: Dish;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;
}
