import {useQuery} from "@tanstack/react-query";
import {request} from "../../../shared/services";
import {useReducer} from "react";
import {coinsListReducer, initialState} from "./coins-list.reducer.ts";
import {CoinsListFilterActionTypes, CoinsListFilterState} from "../types/reducer.types.ts";
import {CoinsListResponse} from "../types";

export const useCoinsList = () => {
  const [state, dispatch] = useReducer(coinsListReducer, initialState);

  const getCoinsList = () => {
    return request.get('coins', {
      page: state.page,
      limit: state.limit,
      title: state.title
    })
  }

  const setPage = (page: number) => {
    dispatch({type: CoinsListFilterActionTypes.SET_PAGE_NUM, payload: page});
  };

  const setTitle = (title: string) => {
    dispatch({type: CoinsListFilterActionTypes.SET_TITLE, payload: title});
  };

  const query = useQuery<CoinsListResponse>({
    queryKey: ["coins-list", state],
    queryFn: getCoinsList,
    select: (data) => data.data,
  })


  return {...query, setPage, setTitle, state, isLoading: query.isLoading || query.isFetching}
}