import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CcxtService } from './ccxt.service';

import type { ExchangeId } from 'ccxt';

@Controller('ccxt')
export class CcxtController {
  constructor(private readonly ccxtService: CcxtService) {}

  @Get('markets')
  async findAllMarketsByExchange(@Body('exchangeId') exchangeId: ExchangeId) {
    return await this.ccxtService.findAllMarketsByExchange(exchangeId);
  }

  @Get('exchanges')
  getAllExchanges() {
    return this.ccxtService.getAllExchanges();
  }

  @Post('currencies')
  async findAllCurrenciesByExchange(
    @Body('exchangeId') exchangeId: ExchangeId,
  ) {
    return await this.ccxtService.findAllCurrenciesByExchange(exchangeId);
  }

  @Post('tickers')
  async findTickersByExchange(
    @Body('exchangeId') exchangeId: ExchangeId,
    @Body('symbols') symbols: string[],
  ) {
    return await this.ccxtService.findTickersByExchange(exchangeId, symbols);
  }
}
