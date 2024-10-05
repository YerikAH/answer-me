import { Error } from "@/types";
import { create } from "zustand";

type Store = {
  cases: unknown;
  setCases: (newCases: unknown) => void;
  casesLoader: boolean;
  setCasesLoader: (newLoader: boolean) => void;
  casesError: Error;
  setCasesError: (newError: Error) => void;
};

export const useCasesStore = create<Store>()((set) => ({
  cases: null,
  setCases: (newCases: unknown) => set(() => ({ cases: newCases })),
  casesLoader: false,
  setCasesLoader: (newLoader: boolean) =>
    set(() => ({ casesLoader: newLoader })),
  casesError: { error: false, message: "", status: 0 },
  setCasesError: (newError: Error) => set(() => ({ casesError: newError })),
}));
