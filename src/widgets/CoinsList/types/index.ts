import {Coin} from "../../../entities/Coin/types";

export interface CoinsListResponse {
  data: Coin[];
  meta: Meta;
}

export type Meta = {
  page: number,
  limit: number,
  total: number,
  page_count: number
}
