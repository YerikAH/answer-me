import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";

interface Props {
  users: {
    name: string;
    email: string;
    role: string;
    imageUrl: string;
    id: string;
  }[];
}
export const ListUsers = ({ users }: Props) => {
  return (
    <ul role="list" className="divide-y divide-zinc-100 mt-8">
      {users.map((user) => (
        <Link
          to={user.id}
          key={user.email}
          className="relative flex justify-between transition-all gap-x-6 px-4 py-5 hover:bg-zinc-200 cursor-pointer sm:px-6 lg:px-8"
        >
          <div className="flex min-w-0 gap-x-4 items-center">
            <img
              alt=""
              src={user.imageUrl}
              className="w-32 h-24 flex-none rounded-lg object-cover bg-zinc-50"
            />
            <div className="min-w-0 flex-auto">
              <p className="text-base font-semibold leading-6 text-zinc-900">
                <a href={user.id}>
                  <span className="absolute inset-x-0 -top-px bottom-0" />
                  {user.name}
                </a>
              </p>
              <p className="mt-1 flex text-sm leading-5 text-zinc-500">
                <a
                  href={`mailto:${user.email}`}
                  className="relative truncate hover:underline"
                >
                  {user.email}
                </a>
              </p>
              <p className="text-zinc-400 text-xs mt-2">
                +8 años de experiencia / 200 casos resueltos
              </p>
            </div>
          </div>
          <div className="flex shrink-0 items-center gap-x-4">
            <div className="hidden sm:flex sm:flex-col sm:items-end">
              <p className="text-sm leading-6 text-zinc-900">{user.role}</p>
            </div>
            <ChevronRightIcon
              aria-hidden="true"
              className="h-5 w-5 flex-none text-zinc-400"
            />
          </div>
        </Link>
      ))}
    </ul>
  );
};
