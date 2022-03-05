import { ExchangeId } from 'ccxt';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { EnumExchangeId } from './ccxt.enum';

export class ExchangeIdDto {
  @IsNotEmpty()
  @IsString()
  @IsEnum(EnumExchangeId)
  exchangeId: ExchangeId;
}

export class findTickerByExchangeDto extends ExchangeIdDto {
  @IsNotEmpty()
  @IsString()
  tradePair: string;
}
