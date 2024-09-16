import { ActionDropdown, SearchInput } from "@/components";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";

const sortBy = [
  { id: 1, name: "Ordenar por fecha", action: () => {} },
  { id: 2, name: "Ordenar por nombre", action: () => {} },
  { id: 3, name: "Ordenar por estado", action: () => {} },
];
export const ListOptions = () => {
  return (
    <div className="flex items-center justify-between mt-6 w-full">
      <div className="flex items-center flex-wrap gap-4 md:flex-nowrap">
        <SearchInput />
        <ActionDropdown options={sortBy} icon={ChevronUpDownIcon} />
      </div>
      <div />
    </div>
  );
};
