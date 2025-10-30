import { PartialType } from '@nestjs/mapped-types';
import { CreateGatheringDto } from './create-gathering.dto';
import { IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class UpdateGatheringDto extends PartialType(CreateGatheringDto) {
  @IsNumber()
  @IsNotEmpty()
  id: number;
}
