import { Currency } from '../Currency'
import { NativeCurrency } from '../NativeCurrency'
import { Token } from '../Token'
import { WNATIVE } from '../../constants/tokens'
import invariant from 'tiny-invariant'

export class Pegc extends NativeCurrency {
  protected constructor(chainId: number) {
    super(chainId, 2325, 'PEGC', 'PEGCHAIN')
  }

  public get wrapped(): Token {
    const wnative = WNATIVE[this.chainId]
    invariant(!!wnative, 'WRAPPED')
    return wnative
  }

  private static _cache: { [chainId: number]: Pegc } = {}

  public static onChain(chainId: number): Pegc {
    return this._cache[chainId] ?? (this._cache[chainId] = new Pegc(chainId))
  }

  public equals(other: Currency): boolean {
    return other.isNative && other.chainId === this.chainId
  }
}
