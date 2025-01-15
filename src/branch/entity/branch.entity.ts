import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Franchise } from 'src/franchise/entity/franchise.entity';
import { Product } from 'src/product/entity/product.entity';

@Entity()
export class Branch {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Franchise, (franchise) => franchise.branches, {
    onDelete: 'CASCADE',
  })
  franchise: Franchise;

  @OneToMany(() => Product, (product) => product.branch, { cascade: true })
  products: Product[];
}
