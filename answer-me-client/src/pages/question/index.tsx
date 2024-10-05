import { DataHandler, GoBack } from "@/components";
import { useFetch, useTitle } from "@/hooks";
import { ROUTES } from "@/router/routes";
import { useEffect } from "react";
import { QuestionDetails } from "./components/question-details";
import { useParams } from "react-router-dom";
import { getQuestion } from "@/services";
import { QuestionHeader } from "./components/question-header";

export default function Question() {
  const { changeTitle } = useTitle();
  const params = useParams();
  const { data, error, fetchData, loader } = useFetch(getQuestion);

  useEffect(() => {
    changeTitle("Consulta -  Arxatec");
    fetchData(params.id);
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="mt-12 mx-auto w-full max-w-6xl">
      <GoBack name="Consultas" route={ROUTES.QUESTIONS} />

      <DataHandler
        data={data}
        dataLength={data?.length}
        error={error}
        isLoading={loader}
      >
        <>
          <QuestionHeader data={data} />
          <QuestionDetails data={data} />
        </>
      </DataHandler>
    </div>
  );
}
