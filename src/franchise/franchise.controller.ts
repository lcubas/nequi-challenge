import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { FranchiseService } from './fanchise.service';
import { CreateFranchiseDto } from './dto/create-fanchise.dto';
import { BranchService } from '../branch/branch.service';
import { CreateBranchDto } from 'src/branch/dto/create-branch.dto';

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

  @Post('/:franchiseId/branches')
  createBranch(
    @Param('franchiseId') franchiseId: number,
    @Body() dto: CreateBranchDto,
  ) {
    return this.branchService.create(franchiseId, dto);
  }

  @Get('/:franchiseId/branches')
  getBranches(@Param('franchiseId') franchiseId: number) {
    return this.branchService.findByFranchise(franchiseId);
  }
}
