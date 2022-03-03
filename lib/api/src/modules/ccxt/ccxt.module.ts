import { Module } from '@nestjs/common';
import { CcxtResolver } from './ccxt.resolver';
import { CcxtService } from './ccxt.service';

@Module({
  providers: [CcxtService, CcxtResolver],
  exports: [CcxtService],
  imports: [],
})
export class CcxtModule {}
