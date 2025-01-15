import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Franchise } from './entity/franchise.entity';
import { CreateFranchiseDto } from './dto/create-fanchise.dto';

@Injectable()
export class FranchiseService {
  constructor(
    @InjectRepository(Franchise)
    private franchiseRepository: Repository<Franchise>,
  ) {}

  async create(dto: CreateFranchiseDto): Promise<Franchise> {
    const franchise = this.franchiseRepository.create(dto);
    return this.franchiseRepository.save(franchise);
  }

  async findAll(): Promise<Franchise[]> {
    return this.franchiseRepository.find({ relations: ['branches'] });
  }
}
