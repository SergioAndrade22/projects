import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';
import { Category } from '../../categories/entities/category.entity';

@Entity()
export class Note {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  body: string;

  @Column()
  created: Date;

  @Column()
  updated: Date;

  @ManyToMany(type => Category)
  @JoinTable()
  categories: Category[];

  @Column()
  deleted: boolean;
}
