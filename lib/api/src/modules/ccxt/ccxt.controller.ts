import { Controller, Get } from '@nestjs/common';
import { CcxtService } from './ccxt.service';

@Controller('ccxt')
export class CcxtController {
  constructor(private readonly ccxtService: CcxtService) {}

  @Get('exchanges')
  getAllExchanges() {
    return this.ccxtService.getAllExchanges();
  }
}
