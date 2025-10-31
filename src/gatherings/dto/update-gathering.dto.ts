import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsNumber } from 'class-validator';
import { CreateGatheringDto } from './create-gathering.dto';

export class UpdateGatheringDto extends PartialType(CreateGatheringDto) {
  @IsNumber()
  @IsNotEmpty()
  id: number;
}
