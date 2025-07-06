export const formatAmountForStripe = (amount: number, currency: string): number => {
    // MYR uses cents (smallest unit is 0.01), so multiply by 100
    // List of zero-decimal currencies (currencies that don't use cents)
    const zeroDecimalCurrencies = [
      "bif",
      "clp",
      "djf",
      "gnf",
      "jpy",
      "kmf",
      "krw",
      "mga",
      "pyg",
      "rwf",
      "ugx",
      "vnd",
      "vuv",
      "xaf",
      "xof",
      "xpf",
    ]
  
    const isZeroDecimal = zeroDecimalCurrencies.includes(currency.toLowerCase())
  
    return isZeroDecimal ? amount : Math.round(amount * 100)
  }
  
  export const formatAmountFromStripe = (amount: number, currency: string): number => {
    // Convert back from Stripe's format
    const zeroDecimalCurrencies = [
      "bif",
      "clp",
      "djf",
      "gnf",
      "jpy",
      "kmf",
      "krw",
      "mga",
      "pyg",
      "rwf",
      "ugx",
      "vnd",
      "vuv",
      "xaf",
      "xof",
      "xpf",
    ]
  
    const isZeroDecimal = zeroDecimalCurrencies.includes(currency.toLowerCase())
  
    return isZeroDecimal ? amount : amount / 100
  }
  