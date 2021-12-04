import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Table from './components/Table'
import { fetchTransactions } from './api/client'
import { ITransactionsData } from './types'

function App() {
  const [data, setData] = useState<ITransactionsData>()

  useEffect(() => {
    const transactions = fetchTransactions()
    transactions.then((res) => {
      setData(res)
    })
  }, [])

  return (
    <>
      <Header title='Bench Test'/>
      {data && (
        <Table
          transactions={data.transactions}
          page={data.page}
          totalCount={data.totalCount}
        />
      )}
    </>
  )
}

export default App
