import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Table from './components/Table'
import { fetchTransactions } from './api/client'
import { ITransactionItem } from './types'

function App() {
  const [transactions, setTransactions] = useState<ITransactionItem[]>()
  const [page, setPage] = useState<number>(1)

  useEffect(() => {
    const data = fetchTransactions(page)
    data.then((res) => {
      setTransactions(res.transactions)
      setPage(res.page)
    })
  }, [page])

  return (
    <>
      <Header title='Bench Test'/>
      {transactions && (
        <Table 
          transactions={transactions}
          totalAmount={0}
        />
      )}
    </>
  )
}

export default App
