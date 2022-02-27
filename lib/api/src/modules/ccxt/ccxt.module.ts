import { Module } from '@nestjs/common';
import { CcxtController } from './ccxt.controller';
import { CcxtService } from './ccxt.service';

@Module({
  controllers: [CcxtController],
  providers: [CcxtService],
  exports: [CcxtService],
})
export class CcxtModule {}
