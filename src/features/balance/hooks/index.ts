import {useQuery} from "@tanstack/react-query";
import {request} from "../../../shared/services";
import {BalanceResponse} from "../types";


export const useBalance = () => {

  const getBalance = () => {
    return request.get("/get-balance");
  };

  return useQuery<BalanceResponse>({
      queryKey: ["balance"],
      queryFn: getBalance,
      select: (data) => data.data.balance
    })
}