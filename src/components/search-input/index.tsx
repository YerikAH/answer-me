import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export const SearchInput = () => {
  return (
    <div className="relative rounded-md shadow-sm w-80">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <MagnifyingGlassIcon
          aria-hidden="true"
          className="h-5 w-5 text-zinc-500"
        />
      </div>
      <input
        id="email"
        name="email"
        type="email"
        placeholder="Buscar casos registrados..."
        className="block w-full bg-zinc-100 rounded-lg border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-zinc-500 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
      />
    </div>
  );
};
