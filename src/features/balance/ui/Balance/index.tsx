import {useBalance} from "../../hooks";

export const Balance = () => {

  const {data: balance} = useBalance();

  return (
    <span className="ml-2" title="Баланс">
      {balance ?? 0} ¢
    </span>
  );
};
