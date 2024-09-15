import { Stats } from "@/components";
import { useTitle } from "@/hooks";
import { ROUTES } from "@/router/routes";
import { getCategoryStyles } from "@/utils";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const stats = [
  {
    name: "Revenue",
    value: "$405,091.00",
    change: "+4.75%",
    changeType: "positive",
  },
  {
    name: "Overdue invoices",
    value: "$12,787.00",
    change: "+54.02%",
    changeType: "negative",
  },
  {
    name: "Outstanding invoices",
    value: "$245,988.00",
    change: "-1.39%",
    changeType: "positive",
  },
];

export default function User() {
  const { changeTitle } = useTitle();
  useEffect(() => {
    changeTitle("Usuario -  Arxatec");
  }, []);
  return (
    <div className="mx-auto max-w-6xl w-full mt-12">
      <Link
        to={ROUTES.USERS}
        className="text-zinc-500 text-sm font-medium flex items-center"
      >
        <ChevronLeftIcon className="size-4 text-zinc-500" />
        Usuarios
      </Link>

      <div className="flex items-end justify-between mt-8 mb-16">
        <div className="flex items-center">
          <div className="flex items-center gap-8">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="avatar"
              className="w-32 h-24 rounded-lg object-cover"
            />

            <div className="">
              <div className="flex items-center gap-4">
                <h1 className="text-lg text-zinc-900 font-semibold">
                  Vasquez Harvey
                </h1>
                <span
                  className={`font-medium px-2 py-[2px] text-xs  border rounded-md capitalize ${getCategoryStyles(
                    "silver"
                  )}`}
                >
                  silver
                </span>
              </div>
              <p className="text-sm text-zinc-600 mt-4">
                Correo electrónico:{" "}
                <b className="text-zinc-800 font-semibold">john@example.com</b>
              </p>
              <p className="text-sm text-zinc-600">
                Número de celular:{" "}
                <b className="text-zinc-800 font-semibold">+51 967 523 180</b>
              </p>
              <p className="text-sm text-zinc-600">
                Número de identificación:{" "}
                <b className="text-zinc-800 font-semibold">77330159</b>
              </p>
            </div>
          </div>
        </div>
        <div className=" flex items-center  gap-x-4">
          <button
            type="button"
            className="text-sm font-semibold  text-gray-900 py-2 px-3 bg-zinc-50 hover:bg-zinc-200 transition-all rounded-lg border"
          >
            Contactar
          </button>
          <button
            type="submit"
            className="inline-flex justify-center rounded-lg bg-zinc-900 px-3 transition-all py-2 text-sm font-semibold text-white shadow-sm hover:bg-zinc-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Eliminar
          </button>
        </div>
      </div>

      <Stats stats={stats} />
    </div>
  );
}
