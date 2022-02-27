import { Controller, Get, Param } from '@nestjs/common';
import { CcxtService } from './ccxt.service';

import type { ExchangeId } from 'ccxt';

@Controller('ccxt')
export class CcxtController {
  constructor(private readonly ccxtService: CcxtService) {}

  @Get('exchanges')
  getAllExchanges() {
    return this.ccxtService.getAllExchanges();
  }

  @Get('currencies/:exchangeId')
  async findAllCurrenciesByExchange(
    @Param('exchangeId') exchangeId: ExchangeId,
  ) {
    return await this.ccxtService.findCurrenciesByExchange(exchangeId);
  }

  @Get('markets/:exchangeId')
  async findAllMarketsByExchange(@Param('exchangeId') exchangeId: ExchangeId) {
    return await this.ccxtService.findMarketsByExchange(exchangeId);
  }
}
