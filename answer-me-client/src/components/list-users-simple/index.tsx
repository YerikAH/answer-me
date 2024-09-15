import { getCategoryStyles } from "@/utils";
import { ChevronRightIcon } from "@heroicons/react/16/solid";

interface Props {
  people: {
    name: string;
    email: string;
    role: string;
    imageUrl: string;
    href: string;
    category: string;
  }[];
}

export const ListUsersSimple = ({ people }: Props) => {
  return (
    <ul role="list" className="divide-y divide-gray-100 mt-8">
      {people.map((person) => (
        <li
          key={person.email}
          className="relative flex justify-between py-5 hover:bg-zinc-200 transition-all"
        >
          <div className="flex gap-x-4 pr-6 sm:w-1/2 sm:flex-none">
            <img
              alt=""
              src={person.imageUrl}
              className="h-12 w-12 flex-none rounded-full bg-gray-50"
            />
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-900">
                <a href={person.href}>
                  <span className="absolute inset-x-0 -top-px bottom-0" />
                  {person.name}
                </a>
              </p>
              <p className="mt-1 flex text-xs leading-5 text-gray-500">
                <a
                  href={`mailto:${person.email}`}
                  className="relative truncate hover:underline"
                >
                  {person.email}
                </a>
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between gap-x-4 sm:w-1/2 sm:flex-none">
            <div className="hidden sm:block">
              <p className="text-sm leading-6 text-gray-900">{person.role}</p>
              <span
                className={`bg-amber-100 text-amber-500 font-medium px-2 py-[2px] text-xs border-amber-200 border rounded-md capitalize ${getCategoryStyles(
                  person.category
                )}`}
              >
                {person.category}
              </span>
            </div>
            <ChevronRightIcon
              aria-hidden="true"
              className="h-5 w-5 flex-none text-gray-400"
            />
          </div>
        </li>
      ))}
    </ul>
  );
};
