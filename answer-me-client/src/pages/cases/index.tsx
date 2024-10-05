import { DataHandler, Pagination, Table } from "@/components";
import { TableOptions } from "./components/table-options";
import { useEffect, useState } from "react";
import { useBatchFetch, useTitle } from "@/hooks";
import { PlusIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { ROUTES } from "@/router/routes";
import { useCasesStore } from "@/store";
import { formatCase } from "@/utils";

export default function Cases() {
  const { changeTitle } = useTitle();
  const { fetchCases } = useBatchFetch();
  const { casesLoader, casesError, cases } = useCasesStore();
  const [casesFormat, setCasesFormat] = useState([]);

  useEffect(() => {
    if (cases?.docs === undefined) return;
    const newCases = cases.docs.map(formatCase);
    setCasesFormat(newCases);
  }, [cases]);

  useEffect(() => {
    changeTitle("Casos -  Arxatec");
    fetchCases();
  }, []);

  return (
    <div className="mt-12 w-full max-w-6xl mx-auto">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold leading-7 text-zinc-900">
          Casos registrados
        </h2>
        <Link
          to={ROUTES.CREATE_CASE}
          className="inline-flex items-center gap-2 justify-center rounded-lg bg-zinc-900 px-6 transition-all py-2 text-sm font-semibold text-white shadow-sm hover:bg-zinc-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          <PlusIcon className="size-3.5" strokeWidth={3} />
          Crear caso
        </Link>
      </div>
      <TableOptions />
      <div className="mt-8">
        <DataHandler
          data={cases}
          error={casesError}
          isLoading={casesLoader}
          dataLength={casesFormat.length}
        >
          <>
            <Table
              data={casesFormat}
              headers={[
                "N°",
                "Fecha de publicación",
                "Caso",
                "Nombre completo",
                "Tipo",
              ]}
            />
            <Pagination />
          </>
        </DataHandler>
      </div>
    </div>
  );
}
