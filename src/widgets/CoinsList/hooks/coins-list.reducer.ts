
import {CoinsListFilterActionTypes, CoinsListFilterState} from "../types/reducer.types.ts";

export const initialState: CoinsListFilterState = {
  page: 1,
  limit: 5,
  title: "",
};

export const coinsListReducer = (
  state: NewsFilterState,
  action: NewsFilterAction
): CoinsListFilterState => {
  switch (action.type) {
    case CoinsListFilterActionTypes.SET_PAGE_NUM:
      return {
        ...state,
        page: action.payload,
      };
    case CoinsListFilterActionTypes.SET_TITLE:
      return {
        ...state,
        title: action.payload,
        pageNum: 1,
      };
    default:
      return state;
  }
};
