import {useMemo, useState} from 'react'
import {CoinsList} from "./widgets/CoinsList/ui";
import {useCoinsList} from "./widgets/CoinsList/hooks";
import {Header} from "./widgets/Header/ui";
import {Pagination} from "./shared/ui";
import {coinsData} from "./widgets/CoinsList/mock/coins.data.ts";

function App() {
  const {data, state, setPage, setTitle, isLoading } = useCoinsList();

  const coins = useMemo(() => data ?? coinsData, [data])

  return (
    <>
      <Header setTitle={setTitle}/>
      <CoinsList
        coins={coins}
        isLoading={isLoading}
        setPage={setPage}
        page={state.page}
        title={state.title}
      />
      <Pagination
        isLoading={isLoading}
        items={coins.length}
        pageNum={state.page}
        onPageChange={setPage}
        itemsOnPage={state.limit}
      />
    </>
  )
}

export default App
