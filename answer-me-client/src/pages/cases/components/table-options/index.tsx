import { ActionDropdown, SearchInput } from "@/components";
import {
  AdjustmentsHorizontalIcon,
  ChevronUpDownIcon,
} from "@heroicons/react/20/solid";

const sortBy = [
  { id: 1, name: "Ordenar por fecha", action: () => {} },
  { id: 2, name: "Ordenar por nombre", action: () => {} },
  { id: 3, name: "Ordenar por estado", action: () => {} },
];
const FilterBy = [
  { id: 1, name: "Filtrar por fecha", action: () => {} },
  { id: 2, name: "Filtrar por estado", action: () => {} },
  { id: 3, name: "Filtrar por nombre", action: () => {} },
];

export const TableOptions = () => {
  return (
    <div className="flex items-start justify-between mt-6 gap-4 flex-wrap w-full">
      <div className="flex items-center flex-wrap gap-4 md:flex-nowrap">
        <SearchInput />
        <ActionDropdown options={sortBy} icon={ChevronUpDownIcon} />
      </div>
      <div>
        <ActionDropdown options={FilterBy} icon={AdjustmentsHorizontalIcon} />
      </div>
    </div>
  );
};
