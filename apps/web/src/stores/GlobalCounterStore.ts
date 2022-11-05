import create from "zustand";
import { devtools } from "zustand/middleware";

interface GlobalCounterState {
  count: number;
  inc: () => void;
}

export const useGlobalCounterStore = create<GlobalCounterState>()(
  devtools(
    (set) => ({
      count: 0,
      inc: () => set((state) => ({ count: state.count + 1 })),
    }),
    {
      name: "globalCounterState",
    }
  )
);
