import { Module } from '@nestjs/common';
import { ArbitrageModule } from './modules/arbitrage/arbitrage.module';
import { CcxtModule } from './modules/ccxt/ccxt.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [CcxtModule, ArbitrageModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
