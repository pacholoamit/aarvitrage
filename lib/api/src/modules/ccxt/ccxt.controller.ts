import { Controller, Get, Param, Query } from '@nestjs/common';
import { CcxtService } from './ccxt.service';

import type { ExchangeId } from 'ccxt';

@Controller('ccxt')
export class CcxtController {
  constructor(private readonly ccxtService: CcxtService) {}

  @Get('exchanges')
  getAllExchanges() {
    return this.ccxtService.getAllExchanges();
  }

  @Get('markets/:exchangeId')
  getAllMarkets(@Param('exchangeId') exchangeId: ExchangeId) {
    return this.ccxtService.getAllMarkets(exchangeId);
  }
}
