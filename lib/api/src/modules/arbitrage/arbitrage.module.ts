import { Module } from '@nestjs/common';
import { ArbitrageService } from './arbitrage.service';
import { ArbitrageController } from './arbitrage.controller';
import { CcxtModule } from '../ccxt/ccxt.module';

@Module({
  providers: [ArbitrageService],
  controllers: [ArbitrageController],
  imports: [CcxtModule],
})
export class ArbitrageModule {}
