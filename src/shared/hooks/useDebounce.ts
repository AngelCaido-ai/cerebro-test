import { useMemo } from "react";

import { debounce } from "lodash";

import { useLatest } from "./";

export const useDebounce = (cb: any, ms: number) => {
  const latestCb = useLatest(cb);

  return useMemo(
    () =>
      debounce((...args) => {
        latestCb.current(...args);
      }, ms),
    [ms, latestCb]
  );
};
