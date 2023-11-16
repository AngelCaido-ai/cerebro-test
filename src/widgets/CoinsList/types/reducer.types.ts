export type CoinsListFilterState = {
  page: number;
  limit: number;
  title: string;
};

export enum CoinsListFilterActionTypes {
  SET_PAGE_NUM = "SET_PAGE_NUM",
  SET_LIMIT = "SET_LIMIT",
  SET_TITLE = "SET_TITLE",
}

type SetPageNumAction = {
  type: CoinsListFilterActionTypes.SET_PAGE_NUM;
  payload: number;
};

type SetLimitAction = {
  type: CoinsListFilterActionTypes.SET_LIMIT;
  payload: number;
};

type SetTitleAction = {
  type: CoinsListFilterActionTypes.SET_TITLE;
  payload: string;
};

export type CoinsListFilterAction = SetPageNumAction | SetLimitAction | SetTitleAction;