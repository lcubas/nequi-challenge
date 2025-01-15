import { Body, Controller, Get, Post } from '@nestjs/common';
import { FranchiseService } from './fanchise.service';
import { CreateFranchiseDto } from './dto/create-fanchise.dto';
import { BranchService } from '../branch/branch.service';

@Controller('franchises')
export class FranchiseController {
  constructor(
    private readonly franchiseService: FranchiseService,
    private readonly branchService: BranchService,
  ) {}

  @Post()
  create(@Body() dto: CreateFranchiseDto) {
    return this.franchiseService.create(dto);
  }

  @Get()
  findAll() {
    return this.franchiseService.findAll();
  }
}
