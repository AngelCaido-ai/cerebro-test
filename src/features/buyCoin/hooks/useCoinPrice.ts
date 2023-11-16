import {useQuery} from "@tanstack/react-query";

export const useCoinPrice = (id: number) => {

  const getCoinPrice = () => {
    return request.get(`/coins/${id}/price`);
  };

  return useQuery({
    queryKey: ["coin_price", id],
    queryFn: getCoinPrice,
    select: (data) => data.data.price
  })
}