import { Body, Controller, Post } from '@nestjs/common';
import { ArbitrageService } from './arbitrage.service';

@Controller('arbitrage')
export class ArbitrageController {
  constructor(private readonly arbitrageService: ArbitrageService) {}

  @Post('pairs')
  getTradePairArbitrage(@Body('tradePair') tradePair: string) {
    return this.arbitrageService.getTradePairArbitrage(tradePair);
  }
}
