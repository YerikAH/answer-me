import { Error } from "@/types";
import { create } from "zustand";

type Store = {
  lawyers: unknown;
  setLawyers: (newLawyers: unknown) => void;
  lawyersLoader: boolean;
  setLawyersLoader: (newLoader: boolean) => void;
  lawyersError: Error;
  setLawyersError: (newError: Error) => void;
};

export const useLawyersStore = create<Store>()((set) => ({
  lawyers: [],
  setLawyers: (newLawyers: unknown) => set(() => ({ lawyers: newLawyers })),
  lawyersLoader: false,
  setLawyersLoader: (newLoader: boolean) =>
    set(() => ({ lawyersLoader: newLoader })),
  lawyersError: { error: false, message: "", status: 0 },
  setLawyersError: (newError: Error) => set(() => ({ lawyersError: newError })),
}));
