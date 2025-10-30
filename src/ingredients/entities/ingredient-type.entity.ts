import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('ingredients_type')
export class IngredientType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'type_name' })
  typeName: string;
}
