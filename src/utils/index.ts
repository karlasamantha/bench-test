import { ITransactionItem } from "../types"

export const formatDateString = (date: string, locale: string = 'en-CA') => {
  return new Date(date).toLocaleDateString(locale)
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

export const isLastPage = (page: number, transactionsLength: number, totalCount: number) => {
  // determine if we reached the last page based on the number of items per page
  // and the total number os transactions across all pages
  return (page - 1) * 10 + transactionsLength >= totalCount
}