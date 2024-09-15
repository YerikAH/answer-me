import { ActionDropdown, SearchInput } from "@/components";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";

const sortBy = [
  { id: 1, name: "Ordenar por fecha", action: () => {} },
  { id: 2, name: "Ordenar por nombre", action: () => {} },
  { id: 3, name: "Ordenar por estado", action: () => {} },
];
const filterBy = [
  { id: 1, name: "Filtrar por nombre", action: () => {} },
  { id: 2, name: "Ordenar por nombre", action: () => {} },
  { id: 3, name: "Ordenar por estado", action: () => {} },
];
export const ListOptions = () => {
  return (
    <div className="flex items-center justify-between mt-6">
      <div className="flex items-center flex-wrap gap-4">
        <SearchInput />
        <ActionDropdown options={sortBy} icon={ChevronUpDownIcon} />
      </div>
      <ActionDropdown options={filterBy} icon={AdjustmentsHorizontalIcon} />
    </div>
  );
};
