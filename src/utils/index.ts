import { ITransactionItem } from "../types"

export const formatDateString = (date: string) => {
  // using substring to avoid adding a third-party library to format string
  return new Date(date).toDateString().substring(3)
}

export const formatCurrency = (value: string, locale: string = 'en-CA', currency: string = 'CAD') => {
  const amount = parseFloat(value)
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency
  }).format(amount)
}

export const calculateTotalAmount = (transactions: ITransactionItem[]): string => {
  return formatCurrency(transactions
    .map(transaction => parseFloat(transaction.Amount))
    .reduce((total, amount) => total + amount)
    .toFixed(2))
}

export const isLastPage = (page: number, totalCount: number) => {
  // determine last based on the limit of items per initial request
  return page >= Math.ceil(totalCount / 10)
}