import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FranchiseController } from './franchise.controller';
import { FranchiseService } from './fanchise.service';
import { Franchise } from './entity/franchise.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Franchise])],
  controllers: [FranchiseController],
  providers: [FranchiseService],
  exports: [FranchiseService],
})
export class FranchiseModule {}
