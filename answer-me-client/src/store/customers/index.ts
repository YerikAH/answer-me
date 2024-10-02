import { Error } from "@/types";
import { create } from "zustand";

type Store = {
  customers: unknown;
  setCustomers: (newCustomers: unknown) => void;
  customersLoader: boolean;
  setCustomersLoader: (newLoader: boolean) => void;
  customersError: Error;
  setCustomersError: (newError: Error) => void;
};

export const useCustomersStore = create<Store>()((set) => ({
  customers: [],
  setCustomers: (newCustomers: unknown) =>
    set(() => ({ customers: newCustomers })),
  customersLoader: false,
  setCustomersLoader: (newLoader: boolean) =>
    set(() => ({ customersLoader: newLoader })),
  customersError: { error: false, message: "", status: 0 },
  setCustomersError: (newError: Error) =>
    set(() => ({ customersError: newError })),
}));
