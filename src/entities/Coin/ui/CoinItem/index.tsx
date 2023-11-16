import {Coin} from "../../types";
import {useModal} from "react-simple-modal-provider";

export const CoinItem = ({title, id}: Coin) => {

  const buyModal = useModal("buy-coin-modal")

  const onClick = () => {
    buyModal.open({
      coinId: id
    })
  }

  return (
    <div onClick={onClick} className="cursor-pointer">
      {title}
    </div>
  );
};
