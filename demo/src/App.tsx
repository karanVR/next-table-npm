import React, { useState } from 'react'
import { DataTable } from 'next-table'

const App: React.FC = () => {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  })
  const [filterField, setFilterField] = useState<string>('')
  const [filterInput, setFilterinput] = useState<string>('')
  return (
    <div>
      <h1>Hello, React with TypeScript!</h1>
      <DataTable
        columns={[]}
        data={[]}
        totalCount={20}
        isDataLoading={false}
        showFilter
        pagination={pagination}
        setPagination={setPagination}
        filterField={filterField}
        setFilterField={setFilterField}
        filterInput={filterField}
        setFilterinput={setFilterinput as any}
        showDownloadButton
        isBorder
      />
    </div>
  )
}

export default App
