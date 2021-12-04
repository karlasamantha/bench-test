export interface ITransactionsData {
  totalCount: number,
  page: number,
  transactions: ITransactionItem[]
}

export interface ITransactionItem {
  Date: string,
  Ledger: string,
  Amount: string,
  Company: string
}

export enum TableHeaderItemsEnum {
  Date = 'Date',
  Company = 'Company',
  Account = 'Account',
}