import { Body, Controller, Get, Post } from '@nestjs/common';
import { CcxtService } from './ccxt.service';
import { CcxtDto } from './ccxt.dto';

@Controller('ccxt')
export class CcxtController {
  constructor(private readonly ccxtService: CcxtService) {}

  @Get('exchanges')
  getAllExchanges() {
    return this.ccxtService.getAllExchanges();
  }

  @Post('markets')
  async findAllMarketsByExchange(@Body() ccxtDto: CcxtDto) {
    return await this.ccxtService.findAllMarketsByExchange(ccxtDto);
  }

  @Post('currencies')
  async findAllCurrenciesByExchange(@Body() ccxtDto: CcxtDto) {
    return await this.ccxtService.findAllCurrenciesByExchange(ccxtDto);
  }

  @Post('ticker')
  async findTickerByExchange(@Body() ccxtDto: CcxtDto) {
    return await this.ccxtService.findTickerByExchange(ccxtDto);
  }
}
