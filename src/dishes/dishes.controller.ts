import { Controller } from '@nestjs/common';
import { DishesService } from './dishes.service';

@Controller('dishes')
export class DishesController {
  constructor(readonly _dishesService: DishesService) {}
}
