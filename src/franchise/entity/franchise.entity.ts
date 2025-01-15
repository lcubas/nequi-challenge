import { Branch } from 'src/branch/entity/branch.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class Franchise {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Branch, (branch) => branch.franchise, { cascade: true })
  branches: Branch[];
}
