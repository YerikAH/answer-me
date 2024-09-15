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
    <div className="flex items-center justify-between mt-6">
      <div className="flex items-center flex-wrap gap-4">
        <SearchInput />
        <ActionDropdown options={sortBy} icon={ChevronUpDownIcon} />
      </div>
      <div>
        <ActionDropdown options={FilterBy} icon={AdjustmentsHorizontalIcon} />
      </div>
    </div>
  );
};
