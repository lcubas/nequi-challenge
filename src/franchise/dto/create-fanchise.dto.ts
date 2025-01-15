import { IsString, IsNotEmpty } from 'class-validator';

export class CreateFranchiseDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}
