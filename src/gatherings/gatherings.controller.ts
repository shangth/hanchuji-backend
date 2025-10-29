import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { GatheringsService } from './gatherings.service';
import { ReqSucc } from '../tools/resBase';

interface GatheringDto {
  id: string;
  name: string;
  time: number;
  location: string;
  status: string;
  menu_locked: boolean;
  created_by: string;
  created_at: string;
  updated_at: string;
}

type CreateGatheringDto = Pick<GatheringDto, 'name' | 'time' | 'location'>;



@Controller('gatherings')
export class GatheringsController {
  constructor(private readonly gatheringsService: GatheringsService) {}

  @Get('list')
  list() {
    return new ReqSucc(200, {
      message: '获取成功',
      data: []
    });
  }

  @Post('create')
  create(@Body() createGatheringDto: CreateGatheringDto) {
    const { name, time, location } = createGatheringDto;
    return new ReqSucc(200, {
      message: '创建成功',
      data: {
        name,
        time,
        location
      }
    });
  }

  @Delete('delete')
  delete(@Param('id') id: string) {
    return new ReqSucc(200, {
      message: '删除成功',
      data: {
        id
      }
    });
  }
}
