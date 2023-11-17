import {Dispatch, useMemo} from "react";
import {Coin} from "../../entities/Coin/types";
import {CoinItem} from "../../entities/Coin/ui";
import {ModalProvider} from "react-simple-modal-provider";
import {BuyCoinModal} from "../../features/buyCoin/ui";
import {useTranslation} from "react-i18next";

interface Props {
  page: number,
  coins: Coin[],
  setPage: Dispatch<number>
  limit?: number,
  isLoading: boolean,
  title: string
}

function searchByName(array: any[], searchTerm = "") {
  searchTerm = searchTerm.toLowerCase();

  return array.filter((product) => {
    return product.title.toLowerCase().includes(searchTerm);
  });
}


export const CoinsList = ({coins, page, limit = 5, isLoading = false, title}: Props) => {
  const { t } = useTranslation();

  const foundItems = useMemo(() => searchByName(coins, title), [page, coins, title])
  const items = useMemo(() => foundItems.slice(page * limit - 5, limit * page), [page, limit, title])


  if(isLoading) {
    return (
      <div className="my-auto text-center">
        {t("loading")}
      </div>
    )
  }

  if(!coins || coins.length === 0) {
    return (
      <div className="my-auto text-center">
        {t("coin-not-found")}
      </div>
    )
  }

  return (
    <ModalProvider value={[BuyCoinModal]}>
      <div className="flex flex-col gap-3">
        {items.map(coin => (
          <CoinItem key={coin.id} {...coin}/>
        ))}
      </div>
    </ModalProvider>
  );
};
