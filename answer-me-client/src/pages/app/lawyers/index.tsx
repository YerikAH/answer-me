/* eslint-disable @typescript-eslint/ban-ts-comment */
import { DataHandler, ListUsers } from "@/components/app";
import { ListOptions } from "./components/list-options";
import { useEffect, useState } from "react";
import { useBatchFetch, useTitle } from "@/hooks";
import { useLawyersStore } from "@/store";
import { formatLawyers } from "@/utils";

export default function Lawyers() {
  const { changeTitle } = useTitle();
  const { fetchLawyers } = useBatchFetch();
  const { lawyersLoader, lawyersError, lawyers } = useLawyersStore();
  const [lawyersFormat, setLawyersFormat] = useState([]);

  useEffect(() => {
    // @ts-ignore
    if (lawyers?.docs === undefined) return;
    // @ts-ignore
    const newLawyers = lawyers.docs.map(formatLawyers);

    setLawyersFormat(newLawyers);
  }, [lawyers]);

  useEffect(() => {
    changeTitle("Abogados -  Arxatec");
    fetchLawyers();
  }, []);
  return (
    <div className="mt-12 w-full max-w-6xl mx-auto">
      <h2 className="text-xl font-semibold leading-7 text-zinc-900">
        Abogados
      </h2>
      <ListOptions />

      <DataHandler
        data={lawyers}
        error={lawyersError}
        isLoading={lawyersLoader}
        dataLength={lawyersFormat.length}
      >
        <ListUsers users={lawyersFormat} />
      </DataHandler>
    </div>
  );
}
