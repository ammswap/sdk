import { ChainId } from '../enums'
import JSBI from 'jsbi'

export * from './addresses'
export * from './kashi'
export * from './natives'
export * from './numbers'
export * from './tokens'

// export const INIT_CODE_HASH: string = '0xa206edb26cf734004c9be5a66304bd14c2f72b2ec8c2f5a3738ea103251a34c1'

export const INIT_CODE_HASH: { [chainId: number]: string } = {
  [ChainId.MAINNET]: '0xa206edb26cf734004c9be5a66304bd14c2f72b2ec8c2f5a3738ea103251a34c1',
  [ChainId.ROPSTEN]: '0xa206edb26cf734004c9be5a66304bd14c2f72b2ec8c2f5a3738ea103251a34c1',
  [ChainId.RINKEBY]: '0xa206edb26cf734004c9be5a66304bd14c2f72b2ec8c2f5a3738ea103251a34c1',
  [ChainId.GÖRLI]: '0xa206edb26cf734004c9be5a66304bd14c2f72b2ec8c2f5a3738ea103251a34c1',
  [ChainId.KOVAN]: '0xa206edb26cf734004c9be5a66304bd14c2f72b2ec8c2f5a3738ea103251a34c1',
  [ChainId.FANTOM]: '0xa206edb26cf734004c9be5a66304bd14c2f72b2ec8c2f5a3738ea103251a34c1',
  [ChainId.MATIC]: '0xa206edb26cf734004c9be5a66304bd14c2f72b2ec8c2f5a3738ea103251a34c1',
  [ChainId.MATIC_TESTNET]: '0xa206edb26cf734004c9be5a66304bd14c2f72b2ec8c2f5a3738ea103251a34c1',
  [ChainId.XDAI]: '0xa206edb26cf734004c9be5a66304bd14c2f72b2ec8c2f5a3738ea103251a34c1',
  [ChainId.BSC]: '0xa206edb26cf734004c9be5a66304bd14c2f72b2ec8c2f5a3738ea103251a34c1',
  [ChainId.BSC_TESTNET]: '0xa206edb26cf734004c9be5a66304bd14c2f72b2ec8c2f5a3738ea103251a34c1',
  [ChainId.ARBITRUM]: '0xa206edb26cf734004c9be5a66304bd14c2f72b2ec8c2f5a3738ea103251a34c1',
  [ChainId.MOONBEAM_TESTNET]: '0xa206edb26cf734004c9be5a66304bd14c2f72b2ec8c2f5a3738ea103251a34c1',
  [ChainId.AVALANCHE]: '0xa206edb26cf734004c9be5a66304bd14c2f72b2ec8c2f5a3738ea103251a34c1',
  [ChainId.AVALANCHE_TESTNET]: '0xa206edb26cf734004c9be5a66304bd14c2f72b2ec8c2f5a3738ea103251a34c1',
  [ChainId.HECO]: '0xa206edb26cf734004c9be5a66304bd14c2f72b2ec8c2f5a3738ea103251a34c1',
  [ChainId.HECO_TESTNET]: '0xa206edb26cf734004c9be5a66304bd14c2f72b2ec8c2f5a3738ea103251a34c1',
  [ChainId.HARMONY]: '0xa206edb26cf734004c9be5a66304bd14c2f72b2ec8c2f5a3738ea103251a34c1',
  [ChainId.HARMONY_TESTNET]: '0xa206edb26cf734004c9be5a66304bd14c2f72b2ec8c2f5a3738ea103251a34c1',
  [ChainId.OKEX]: '0xa206edb26cf734004c9be5a66304bd14c2f72b2ec8c2f5a3738ea103251a34c1',
  [ChainId.OKEX_TESTNET]: '0xa206edb26cf734004c9be5a66304bd14c2f72b2ec8c2f5a3738ea103251a34c1',
  [ChainId.CELO]: '0xa206edb26cf734004c9be5a66304bd14c2f72b2ec8c2f5a3738ea103251a34c1',
  [ChainId.PALM]: '0xa206edb26cf734004c9be5a66304bd14c2f72b2ec8c2f5a3738ea103251a34c1',
  [ChainId.MOONRIVER]: '0xa206edb26cf734004c9be5a66304bd14c2f72b2ec8c2f5a3738ea103251a34c1',
  [ChainId.FUSE]: '0xa206edb26cf734004c9be5a66304bd14c2f72b2ec8c2f5a3738ea103251a34c1'
}

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}

export const LAMBDA_URL = 'https://9epjsvomc4.execute-api.us-east-1.amazonaws.com/dev'

export const SOCKET_URL = 'wss://hfimt374ge.execute-api.us-east-1.amazonaws.com/dev'
