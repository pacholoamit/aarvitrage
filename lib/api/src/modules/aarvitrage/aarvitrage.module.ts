import { Module } from '@nestjs/common';
import { AarvitrageService } from './aarvitrage.service';
import { AarvitrageController } from './aarvitrage.controller';
import { CcxtModule } from '../ccxt/ccxt.module';

@Module({
  providers: [AarvitrageService],
  controllers: [AarvitrageController],
  imports: [CcxtModule],
})
export class AarvitrageModule {}
