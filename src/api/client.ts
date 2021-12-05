import { ITransactionsData } from "../types"

export function fetchData(page: number): Promise<ITransactionsData> {
  return fetch(`https://resttest.bench.co/transactions/${page}.json`)
    .then(res => res.json())
}
