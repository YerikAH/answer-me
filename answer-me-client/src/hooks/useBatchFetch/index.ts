import { getCases, getCustomers, getLawyers, getQuestions } from "@/services";
import { useFetch } from "../useFetch";
import { useEffect } from "react";
import {
  useCasesStore,
  useCustomersStore,
  useLawyersStore,
  useQuestionsStore,
} from "@/store";
import { Error } from "@/types";

export const useBatchFetch = () => {
  const { setCases, setCasesError, setCasesLoader } = useCasesStore();
  const { setLawyers, setLawyersError, setLawyersLoader } = useLawyersStore();
  const { setQuestions, setQuestionsError, setQuestionsLoader } =
    useQuestionsStore();
  const { setCustomers, setCustomersError, setCustomersLoader } =
    useCustomersStore();

  const {
    data: casesData,
    error: casesError,
    fetchData: fetchCases,
    loader: casesLoader,
  } = useFetch(getCases);
  const {
    data: lawyersData,
    error: lawyersError,
    fetchData: fetchLawyers,
    loader: lawyersLoader,
  } = useFetch(getLawyers);
  const {
    data: questionsData,
    error: questionsError,
    fetchData: fetchQuestions,
    loader: questionsLoader,
  } = useFetch(getQuestions);
  const {
    data: customersData,
    error: customersError,
    fetchData: fetchCustomers,
    loader: customersLoader,
  } = useFetch(getCustomers);

  useEffect(() => {
    if (lawyersError.error && !lawyersLoader) return;
    if (questionsError.error && !questionsLoader) return;
    if (customersError.error && !customersLoader) return;

    if (questionsData !== null && !questionsError.error && !questionsLoader)
      console.log("exito");

    if (lawyersData !== null && !lawyersError.error && !lawyersLoader)
      console.log("exito");
    if (customersData !== null && !customersError.error && !customersLoader)
      console.log("exito");
  }, [casesLoader, lawyersLoader, questionsLoader, customersLoader]);

  const initialize = () => {
    fetchCases();
    fetchLawyers();
    fetchQuestions();
    fetchCustomers();
  };

  const handleDataLoading = <T>(
    data: T | null,
    error: Error,
    loader: boolean,
    setLoader: (value: boolean) => void,
    setError: (value: Error) => void,
    setData: (value: T) => void
  ) => {
    setLoader(loader);
    if (error.error && !loader && data === null) {
      setError(error);
    } else if (data !== null && !error.error && !loader) {
      setData(data);
    }
  };

  useEffect(() => {
    handleDataLoading(
      casesData,
      casesError,
      casesLoader,
      setCasesLoader,
      setCasesError,
      setCases
    );
  }, [casesData, casesError, casesLoader]);

  useEffect(() => {
    handleDataLoading(
      questionsData,
      questionsError,
      questionsLoader,
      setQuestionsLoader,
      setQuestionsError,
      setQuestions
    );
  }, [questionsData, questionsError, questionsLoader]);

  useEffect(() => {
    handleDataLoading(
      customersData,
      customersError,
      customersLoader,
      setCustomersLoader,
      setCustomersError,
      setCustomers
    );
  }, [customersData, customersError, customersLoader]);

  useEffect(() => {
    handleDataLoading(
      lawyersData,
      lawyersError,
      lawyersLoader,
      setLawyersLoader,
      setLawyersError,
      setLawyers
    );
  }, [lawyersData, lawyersError, lawyersLoader]);

  return {
    initialize,
    fetchCases,
    fetchCustomers,
    fetchLawyers,
    fetchQuestions,
  };
};
