import { Body, Controller, Get, Post } from '@nestjs/common';
import { CcxtService } from './ccxt.service';
import { CcxtDto } from './ccxt.dto';

@Controller('ccxt')
export class CcxtController {
  constructor(private readonly ccxtService: CcxtService) {}

  @Get('markets')
  async findAllMarketsByExchange(@Body() ccxtDto: CcxtDto) {
    return await this.ccxtService.findAllMarketsByExchange(ccxtDto);
  }

  @Get('exchanges')
  getAllExchanges() {
    return this.ccxtService.getAllExchanges();
  }

  @Post('currencies')
  async findAllCurrenciesByExchange(@Body() ccxtDto: CcxtDto) {
    return await this.ccxtService.findAllCurrenciesByExchange(ccxtDto);
  }

  @Post('tickers')
  async findTickersByExchange(@Body() ccxtDto: CcxtDto) {
    return await this.ccxtService.findTickersByExchange(ccxtDto);
  }
}
