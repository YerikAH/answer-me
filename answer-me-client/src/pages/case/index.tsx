import { GoBack } from "@/components";
import { ROUTES } from "@/router/routes";
import { getCategoryStyles } from "@/utils";
import { CaseDetails } from "./components/case-details";
import { CalendarIcon } from "@heroicons/react/16/solid";
import { IconLabel } from "./components/icon-label";
import { BriefcaseIcon, CheckBadgeIcon } from "@heroicons/react/20/solid";

export function Case() {
  return (
    <div className="mt-12 mx-auto w-full max-w-6xl">
      <GoBack name="Casos" route={ROUTES.CASES} />
      <div className="flex items-center gap-4 mt-8">
        <h1 className="text-xl font-semibold ">Caso #00001</h1>
        <span
          className={`font-medium px-2 py-[2px] text-xs  border rounded-md capitalize ${getCategoryStyles(
            "copper"
          )}`}
        >
          resuelto
        </span>
      </div>
      <div className="mt-4 justify-start">
        <div className="flex items-center gap-8">
          <IconLabel
            icon={CalendarIcon}
            label="Creado el 24 de julio del 2024"
          />
          <IconLabel icon={BriefcaseIcon} label="Sin asignar" />
          <IconLabel icon={CheckBadgeIcon} label="Gratuito" />
        </div>
      </div>
      <CaseDetails />
    </div>
  );
}
