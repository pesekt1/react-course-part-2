import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";

interface CounterStore {
  counter: number;
  max: number;
  increment: () => void;
  reset: () => void;
  setMax: (max: number) => void;
}

const useCounterStore = create<CounterStore>((set) => {
  return {
    counter: 0,
    increment: () => set((store) => ({ counter: store.counter + 1 })),
    reset: () => set(() => ({ counter: 0 })),
    max: 0,
    setMax: (max) => set(() => ({ max })),
  };
});

if (process.env.NODE_ENV === "development")
  mountStoreDevtool("Counter Store", useCounterStore);

export default useCounterStore;
