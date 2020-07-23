import { UInt } from "@polkadot/types/codec";
import { u32 } from "@polkadot/types/primitive";
import { GenericAccountId as AccountId } from '@polkadot/types/generic'
import { Registry, AnyNumber } from "@polkadot/types/types";

export class RawAmount extends UInt {
    constructor(registry: Registry, value?: AnyNumber) {
        super(registry, value, 128);
    }
}

export class TokenId extends u32 {
    constructor(registry: Registry, value?: AnyNumber) {
        super(registry, value);
    }
}

export class Address extends AccountId { }
