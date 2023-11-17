import {useMemo} from 'react'
import {CoinsList} from "./widgets/CoinsList/ui";
import {useCoinsList} from "./widgets/CoinsList/hooks";
import {Header} from "./widgets/Header/ui";
import {coinsData} from "./widgets/CoinsList/mock/coins.data.ts";
import {Coin} from "@/entities/Coin/types";

function App() {
  const {data, state, setPage, setTitle, isLoading } = useCoinsList();

  const coins = useMemo(() => data ?? coinsData as Coin[], [data])

  return (
    <>
      <Header setTitle={setTitle}/>
      <CoinsList
        coins={coins}
        isLoading={isLoading}
        setPage={setPage}
        page={state.page}
        title={state.title}
        limit={state.limit}
      />
    </>
  )
}

export default App
