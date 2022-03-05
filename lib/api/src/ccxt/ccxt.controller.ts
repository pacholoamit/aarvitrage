import { Body, Controller, Get, Post } from '@nestjs/common';
import { CcxtService } from './ccxt.service';
import { findTickerByExchangeDto, ExchangeIdDto } from './dto';

@Controller('ccxt')
export class CcxtController {
  constructor(private readonly ccxtService: CcxtService) {}

  @Get('exchanges')
  getAllExchanges() {
    return this.ccxtService.getAllExchanges();
  }

  @Post('markets')
  async findAllMarketsByExchange(@Body() dto: ExchangeIdDto) {
    return await this.ccxtService.findAllMarketsByExchange(dto);
  }

  @Post('currencies')
  async findAllCurrenciesByExchange(@Body() dto: ExchangeIdDto) {
    return await this.ccxtService.findAllCurrenciesByExchange(dto);
  }

  @Post('ticker')
  async findTickerByExchange(@Body() dto: findTickerByExchangeDto) {
    return await this.ccxtService.findTickerByExchange(dto);
  }
}
