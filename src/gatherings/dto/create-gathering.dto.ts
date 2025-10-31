import { IsBoolean, IsDateString, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateGatheringDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsDateString()
  time: string;

  @IsString()
  @IsNotEmpty()
  location: string;

  @IsBoolean()
  @IsOptional()
  menuLocked?: boolean;

  @IsString()
  @IsNotEmpty()
  createdBy: string;
}
