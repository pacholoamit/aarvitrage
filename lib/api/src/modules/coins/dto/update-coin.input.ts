import { CreateCoinInput } from './create-coin.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateCoinInput extends PartialType(CreateCoinInput) {
  id: number;
}
