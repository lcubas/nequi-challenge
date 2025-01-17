import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FranchiseController } from './franchise.controller';
import { FranchiseService } from './fanchise.service';
import { Franchise } from './entity/franchise.entity';
import { BranchModule } from 'src/branch/branch.module';

@Module({
  imports: [TypeOrmModule.forFeature([Franchise]), BranchModule],
  controllers: [FranchiseController],
  providers: [FranchiseService],
})
export class FranchiseModule {}
