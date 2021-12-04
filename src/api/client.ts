import { ITransactionsData } from "../types"

export function fetchTransactions(page: number = 1): Promise<ITransactionsData> {
  return fetch(`https://resttest.bench.co/transactions/${page}.json`)
    .then(res => res.json())
    .catch((err) => {
      throw Error(`We had an issue fetching transactions, see log: ${err}`)
    })
}
