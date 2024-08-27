import { create } from "zustand";

interface CounterStore {
  count: number;
  count1: number;
  increase: () => void;
  increaseAsync: () => Promise<void>;
  decrease: () => void;
}

export const useCounterStore = create<CounterStore>((set) => ({
  count: 0,
  count1: 0,
  increase: () => set((state) => ({ count: state.count + 1 })),
  decrease: () => set((state) => ({ count: state.count - 1 })),
  increaseAsync: async () => {},
}));
