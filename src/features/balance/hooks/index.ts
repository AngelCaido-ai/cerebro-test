import {useQuery} from "@tanstack/react-query";
import {request} from "../../../shared/services";
import {BalanceResponse} from "../types";


export const useBalance = () => {

  const getBalance = (): Promise<BalanceResponse> => {
    return request.get("/get-balance");
  };

  return useQuery({
      queryKey: ["balance"],
      queryFn: getBalance,
      select: (data) => data.data.balance
    })
}