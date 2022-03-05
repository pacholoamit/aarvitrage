import { Module } from '@nestjs/common';
import { ArbitrageModule } from './arbitrage/arbitrage.module';
import { CcxtModule } from './ccxt/ccxt.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [CcxtModule, ArbitrageModule, PrismaModule],
})
export class AppModule {}
