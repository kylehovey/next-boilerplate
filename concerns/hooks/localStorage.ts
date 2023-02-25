import { useState, useEffect, useCallback } from "react";

export const useLocalState = <T>(
  key: string,
  initialValue: T,
  serialize: (x: T) => string,
  deserialize: (x: string) => T
): [T, (value: T) => void] => {
  const [value, setValue] = useState<T>(initialValue);

  useEffect(() => {
    const extant = localStorage.getItem(key);

    if (extant === null) {
      localStorage.setItem(key, serialize(initialValue));
    } else {
      setValue(deserialize(extant));
    }
  }, [key, initialValue, serialize, deserialize]);

  const synchronize = useCallback(
    (value: T) => {
      localStorage.setItem(key, serialize(value));
      setValue(value);
    },
    [key, serialize]
  );

  return [value, synchronize];
};

const initialSelection = "[]";

export const useLocalSelection = (
  key: string
): [
  Set<number>,
  (id: number, selected: boolean) => void,
  () => void,
  (ids: number[]) => void
] => {
  const [selected, setSelected] = useState<Set<number>>(new Set());

  useEffect(() => {
    const extant = localStorage.getItem(key);

    if (extant === null) {
      localStorage.setItem(key, initialSelection);
      setSelected(new Set<number>(JSON.parse(initialSelection)));
    } else {
      setSelected(new Set<number>(JSON.parse(extant)));
    }
  }, [key]);

  const synchronize = useCallback(
    (id: number, shouldSelect: boolean) => {
      if (shouldSelect) {
        selected.add(id);
      } else {
        selected.delete(id);
      }

      const values = Array.from(selected);
      localStorage.setItem(key, JSON.stringify(values));
      setSelected(new Set(values));
    },
    [key, selected]
  );

  const reset = useCallback(() => {
    const next = new Set<number>();
    localStorage.setItem(key, JSON.stringify(Array.from(next)));
    setSelected(next);
  }, [key]);

  const bulkSelect = useCallback(
    (ids: number[]) => {
      const next = new Set<number>(ids);
      localStorage.setItem(key, JSON.stringify(Array.from(next)));
      setSelected(next);
    },
    [key]
  );

  return [selected, synchronize, reset, bulkSelect];
};
