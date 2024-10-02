import { Error } from "@/types";
import { create } from "zustand";

type Store = {
  questions: unknown;
  setQuestions: (newQuestions: unknown) => void;
  questionsLoader: boolean;
  setQuestionsLoader: (newLoader: boolean) => void;
  questionsError: Error;
  setQuestionsError: (newError: Error) => void;
};

export const useQuestionsStore = create<Store>()((set) => ({
  questions: [],
  setQuestions: (newQuestions: unknown) =>
    set(() => ({ questions: newQuestions })),
  questionsLoader: false,
  setQuestionsLoader: (newLoader: boolean) =>
    set(() => ({ questionsLoader: newLoader })),
  questionsError: { error: false, message: "", status: 0 },
  setQuestionsError: (newError: Error) =>
    set(() => ({ questionsError: newError })),
}));
