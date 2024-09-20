import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export const SearchInput = () => {
  return (
    <div className="relative rounded-md shadow-sm max-w-80 w-full">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <MagnifyingGlassIcon
          aria-hidden="true"
          className="h-5 w-5 text-zinc-500"
        />
      </div>
      <input
        id="text"
        name="text"
        type="text"
        placeholder="Buscar..."
        className="block w-full bg-white rounded-lg border-0 py-1.5 pl-10 text-zinc-900 ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-500 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
      />
    </div>
  );
};
