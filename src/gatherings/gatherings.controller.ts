import { Body, Controller, Delete, Get, Param, Post, Put, Query, ParseIntPipe } from '@nestjs/common';
import { GatheringsService } from './gatherings.service';
import { ReqSucc } from '../tools/resBase';
import { Gathering } from './entities/gathering.entity';
import { CreateGatheringDto } from './dto/create-gathering.dto';
import { UpdateGatheringDto } from './dto/update-gathering.dto';



@Controller('gatherings')
export class GatheringsController {
  constructor(private readonly gatheringsService: GatheringsService) {}

  @Get('list')
  async list() {
    const gatherings = await this.gatheringsService.findAll();
    return new ReqSucc(200, gatherings);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const gathering = await this.gatheringsService.findOne(parseInt(id));
    if (!gathering) {
      return new ReqSucc(404, null);
    }
    return new ReqSucc(200, gathering);
  }

  @Put('update')
  async update(@Body() updateGatheringDto: UpdateGatheringDto) {
    console.log(updateGatheringDto);
    const gathering = await this.gatheringsService.update(Number(updateGatheringDto.id), {
      ...updateGatheringDto,
      id: Number(updateGatheringDto.id),
      time: new Date(Number(updateGatheringDto.time)),
      menuLocked: updateGatheringDto.menuLocked || false,
      updatedAt: new Date(),
    });
    if (!gathering) {
      return new ReqSucc(404, null);
    }
    return new ReqSucc(200, gathering);
  }

  @Post('create')
  async create(@Body() createGatheringDto: CreateGatheringDto) {
    const gathering = await this.gatheringsService.create({
      ...createGatheringDto,
      time: new Date(Number(createGatheringDto.time)),
      menuLocked: createGatheringDto.menuLocked || false,
      createdBy: 'admin',
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    return new ReqSucc(200, gathering);
  }

  @Delete('delete')
  async delete(@Query('id', ParseIntPipe) id: number) {
    await this.gatheringsService.remove(id);
    return new ReqSucc(200, { id: id });
  }
}
