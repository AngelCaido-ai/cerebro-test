import { RefObject, useLayoutEffect, useRef } from "react";

export const useLatest = (value: any): RefObject<any> => {
  const valueRef = useRef(value);

  useLayoutEffect(() => {
    valueRef.current = value;
  }, [value]);

  return valueRef;
};
