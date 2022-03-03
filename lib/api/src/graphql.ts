
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CreateCoinInput {
    exampleField?: Nullable<number>;
}

export class ExchangeIds {
    names?: Nullable<Nullable<string>[]>;
}

export abstract class IQuery {
    abstract exchanges(): Nullable<ExchangeIds> | Promise<Nullable<ExchangeIds>>;

    abstract coins(): Nullable<Coin>[] | Promise<Nullable<Coin>[]>;

    abstract coin(id: number): Nullable<Coin> | Promise<Nullable<Coin>>;
}

export class Coin {
    exampleField?: Nullable<number>;
}

export abstract class IMutation {
    abstract createCoin(createCoinInput: CreateCoinInput): Coin | Promise<Coin>;
}

type Nullable<T> = T | null;
