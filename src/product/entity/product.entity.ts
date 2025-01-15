import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Branch } from 'src/branch/entity/branch.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  stock: number;

  @ManyToOne(() => Branch, (branch) => branch.products, { onDelete: 'CASCADE' })
  branch: Branch;
}
