import { ROUTES } from "@/router/routes";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";

interface Props {
  name: string;
  route: ROUTES;
}

export const GoBack = ({ name, route }: Props) => {
  return (
    <Link
      to={route}
      className="text-zinc-500 text-sm font-medium flex items-center"
    >
      <ChevronLeftIcon className="size-4 text-zinc-500" />
      {name}
    </Link>
  );
};
