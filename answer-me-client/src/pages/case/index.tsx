import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ROUTES } from "@/router/routes";
import { getCase } from "@/services";
import { useFetch, useTitle } from "@/hooks";
import { DataHandler, GoBack } from "@/components";
import { CaseHeader } from "./components/case-header";
import { CaseDetails } from "./components/case-details";

export default function Case() {
  const { changeTitle } = useTitle();
  const params = useParams();
  const { data, error, fetchData, loader } = useFetch(getCase);

  useEffect(() => {
    changeTitle("Casos -  Arxatec");
    fetchData(params.id);
  }, []);

  return (
    <div className="mt-12 mx-auto w-full max-w-6xl">
      <GoBack name="Casos" route={ROUTES.CASES} />

      <DataHandler
        data={data}
        dataLength={data?.length}
        error={error}
        isLoading={loader}
      >
        <>
          <CaseHeader data={data} />
          <CaseDetails data={data} />
        </>
      </DataHandler>
    </div>
  );
}
