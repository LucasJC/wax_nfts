import { IMarketData } from "../dal/market"

// The quote_token is the token being priced
// in the base_token
const WAX_USDT = "WAX@eosio.token"
const AETHER_WAX = "AETHER@e.rplanet"

// the price of wax in dollars
export function getWaxInUSDT(
  marketData: Array<IMarketData>
): IMarketData | undefined {
  return marketData.find(market => market.quote_token.str === WAX_USDT)
}

// the price of aether in wax
export function getAetherInWax(
  marketData: Array<IMarketData>
): IMarketData | undefined {
  return marketData.find(market => market.quote_token.str === AETHER_WAX)
}

// Aether priced in usdt
export function getAetherInUSDT(marketData: Array<IMarketData>): number {
  const waxInUSDT = getWaxInUSDT(marketData)?.last_price || 0
  const aetherInWax = getAetherInWax(marketData)?.last_price || 0

  const price = aetherInWax * waxInUSDT

  return price
}
