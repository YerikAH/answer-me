import { DataHandler, Pagination, Table } from "@/components";
import { useBatchFetch, useTitle } from "@/hooks";
import { ROUTES } from "@/router/routes";
import { useQuestionsStore } from "@/store";
import { PlusIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Questions() {
  const { changeTitle } = useTitle();
  const { fetchQuestions } = useBatchFetch();
  const { questionsLoader, questionsError, questions } = useQuestionsStore();
  const [questionsFormat, setQuestionsFormat] = useState([]);

  useEffect(() => {
    if (questions.docs === undefined) return;
    // const newQuestions = questions.docs.map(formatCase);
    console.log(questions);

    // setCasesFormat(newCases);
  }, [questions]);

  useEffect(() => {
    changeTitle("Consultas -  Arxatec");
    fetchQuestions();
  }, []);
  return (
    <div className="mt-12 w-full max-w-6xl mx-auto">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold leading-7 text-zinc-900">
          Consultas registradas
        </h2>
        <Link
          to={ROUTES.CREATE_QUESTION}
          className="inline-flex items-center gap-2 justify-center rounded-lg bg-zinc-900 px-6 transition-all py-2 text-sm font-semibold text-white shadow-sm hover:bg-zinc-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          <PlusIcon className="size-3.5" strokeWidth={3} />
          Crear consulta
        </Link>
      </div>
      {/* <TableOptions /> */}
      <div className="mt-8">
        <DataHandler
          data={questions}
          error={questionsError}
          isLoading={questionsLoader}
          dataLength={questionsFormat.length}
        >
          <>
            <Table
              data={questionsFormat}
              headers={[
                "ID",
                "Fecha de publicación",
                "Consulta",
                "Estado",
                "Abogado",
              ]}
            />
            <Pagination />
          </>
        </DataHandler>
      </div>
    </div>
  );
}
