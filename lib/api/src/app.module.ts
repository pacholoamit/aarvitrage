import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CcxtModule } from './modules/ccxt/ccxt.module';

@Module({
  imports: [CcxtModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
