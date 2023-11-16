export type Coin = {
  id: number,
  title: string,
  network: number,
  status: number
}

export type CoinPrice = {
  data: {
    price: number,
  }
}