import { Body, Controller, Post } from '@nestjs/common';
import { ArbitrageService } from './arbitrage.service';
import { getTradePairArbitrageDto } from './dto';

@Controller('arbitrage')
export class ArbitrageController {
  constructor(private readonly arbitrageService: ArbitrageService) {}

  @Post('pairs')
  getTradePairArbitrage(@Body() dto: getTradePairArbitrageDto) {
    return this.arbitrageService.getTradePairArbitrage(dto);
  }
}
