import { IconLabel } from "@/components/app";
import { formatDateToReadable, getCategoryStyles } from "@/utils";
import {
  BriefcaseIcon,
  CalendarIcon,
  CheckBadgeIcon,
} from "@heroicons/react/16/solid";

export const CaseHeader = ({ data }: { data: any }) => (
  <>
    <div className="flex items-center gap-4 mt-8">
      <h1 className="text-xl font-semibold ">Caso #{data.id}</h1>
      <span
        className={`font-medium px-2 py-[2px] text-xs rounded-md capitalize ${getCategoryStyles(
          data.status
        )}`}
      >
        {data.status}
      </span>
    </div>
    <div className="mt-4 justify-between items-center flex flex-wrap gap-4">
      <div className="flex items-center justify-start gap-8 flex-wrap">
        <IconLabel
          icon={CalendarIcon}
          label={`Creado el ${formatDateToReadable(data.createdAt)}`}
        />
        <IconLabel icon={BriefcaseIcon} label={data.caseType} />
        <IconLabel
          icon={CheckBadgeIcon}
          label={data.user.associatedCustomer.plan}
        />
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
            Tomar caso
          </button>
        </div>
      </div>
    </div>
  </>
);
