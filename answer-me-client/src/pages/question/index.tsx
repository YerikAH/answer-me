import { GoBack, IconLabel } from "@/components";
import { useTitle } from "@/hooks";
import { ROUTES } from "@/router/routes";
import { getCategoryStyles } from "@/utils";
import { BriefcaseIcon, CalendarIcon } from "@heroicons/react/16/solid";
import { useEffect } from "react";
import { QuestionDetails } from "./question-details";

export default function Question() {
  const { changeTitle } = useTitle();
  useEffect(() => {
    changeTitle("Consulta -  Arxatec");
  }, []);
  return (
    <div className="mt-12 mx-auto w-full max-w-6xl">
      <GoBack name="Consultas" route={ROUTES.QUESTIONS} />
      <div className="flex items-center gap-4 mt-8">
        <h1 className="text-xl font-semibold ">Consulta #00001</h1>
        <span
          className={`font-medium px-2 py-[2px] text-xs  border rounded-md capitalize ${getCategoryStyles(
            "copper"
          )}`}
        >
          resuelto
        </span>
      </div>
      <div className="mt-4 justify-between items-center flex flex-wrap gap-4">
        <div className="flex items-center justify-start gap-8 flex-wrap">
          <IconLabel
            icon={CalendarIcon}
            label="Creado el 24 de julio del 2024"
          />
          <IconLabel icon={BriefcaseIcon} label="Sin asignar" />
        </div>
        <div>
          <div className=" flex items-center  gap-x-4">
            <button
              type="button"
              className="text-sm font-semibold  text-gray-900 py-2 px-3 bg-zinc-50 hover:bg-zinc-200 transition-all rounded-lg border"
            >
              Eliminar
            </button>
            <button
              type="submit"
              className="inline-flex justify-center rounded-lg bg-zinc-900 px-3 transition-all py-2 text-sm font-semibold text-white shadow-sm hover:bg-zinc-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Responder consulta
            </button>
          </div>
        </div>
      </div>
      <QuestionDetails />
    </div>
  );
}
