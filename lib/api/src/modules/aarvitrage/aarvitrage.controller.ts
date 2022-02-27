import { Controller, Get, Param } from '@nestjs/common';
import { AarvitrageService } from './aarvitrage.service';

@Controller('aarvitrage')
export class AarvitrageController {
  constructor(private readonly aarvitrageService: AarvitrageService) {}

  @Get('pairs/:tradePair')
  getTradePairArbitrage(@Param('tradePair') tradePair: string) {
    return this.aarvitrageService.getTradePairArbitrage(tradePair);
  }
}
