import { Module } from '@nestjs/common';
import { CcxtController } from './ccxt.controller';
import { CcxtResolver } from './ccxt.resolver';
import { CcxtService } from './ccxt.service';

@Module({
  controllers: [CcxtController],
  providers: [CcxtService, CcxtResolver],
  exports: [CcxtService],
  imports: [],
})
export class CcxtModule {}
