import { GoBack } from "@/components/app";
import { useTitle } from "@/hooks";
import { ROUTES } from "@/router/routes";
import { useEffect } from "react";

export default function Lawyer() {
  const { changeTitle } = useTitle();
  useEffect(() => {
    changeTitle("Abogados -  Arxatec");
  }, []);
  return (
    <div className="w-full max-w-6xl mt-12 mx-auto">
      <GoBack name="Abogados" route={ROUTES.LAWYERS} />
    </div>
  );
}
