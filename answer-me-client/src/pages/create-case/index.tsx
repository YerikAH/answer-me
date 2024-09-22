import { GoBack } from "@/components";
import { useTitle } from "@/hooks";
import { ROUTES } from "@/router/routes";
import { DocumentPlusIcon } from "@heroicons/react/24/outline";
import { useEffect } from "react";

export default function CreateCase() {
  const { changeTitle } = useTitle();
  useEffect(() => {
    changeTitle("Crear caso -  Arxatec");
  }, []);
  return (
    <div className="mx-auto w-full max-w-4xl mt-12 h-auto min-h-[100%]">
      <GoBack name="Casos" route={ROUTES.CASES} />
      <div className="mt-6">
        <h2 className="text-xl font-semibold leading-7 text-zinc-900">
          Crear nuevo caso
        </h2>
        <div className="mt-6">
          <div className="space-y-8 border-b border-zinc-900/10  sm:space-y-0 sm:divide-y sm:divide-zinc-900/10">
            <div className="sm:grid sm:grid-cols-2 sm:items-start sm:gap-4 py-6">
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-6 text-zinc-900 sm:pt-1.5"
                >
                  Tipo de caso
                </label>
                <p className="text-zinc-500 text-sm mt-2">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Ipsa, eius.
                </p>
              </div>

              <div>
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  placeholder="Ej. John Doe"
                  className="block w-full rounded-lg border-0 py-1.5 text-zinc-900 bg-white shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-500  focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-2 sm:items-start sm:gap-4 py-6">
              <div>
                <label
                  htmlFor="about"
                  className="block text-sm font-medium leading-6 text-zinc-900 sm:pt-1.5"
                >
                  Descripción de tu caso
                </label>
                <p className="text-zinc-500 text-sm mt-2">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Fugit quidem tempora sed quis maxime facere consequatur.
                </p>
              </div>
              <div>
                <textarea
                  id="about"
                  name="about"
                  rows={6}
                  placeholder="Ej. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit quidem tempora sed quis maxime facere consequatur."
                  className="block w-full max-w-2xl rounded-lg border-0 bg-white py-1.5 text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-500 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                  defaultValue={""}
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-2 sm:items-start sm:gap-4 py-6">
              <div>
                <label
                  htmlFor="about"
                  className="block text-sm font-medium leading-6 text-zinc-900 sm:pt-1.5"
                >
                  Documentos adjuntos
                </label>
                <p className="text-zinc-500 text-sm mt-2">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Fugit quidem tempora sed quis maxime facere consequatur.
                </p>
              </div>
              <div>
                <button
                  type="button"
                  className="relative block w-full rounded-lg border-2 border-dashed border-zinc-300 p-12 text-center hover:border-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  <DocumentPlusIcon className="size-12 mx-auto text-zinc-400" />
                  <span className="mt-2 block text-sm font-semibold text-zinc-900">
                    Adjuntar archivos
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-end gap-x-4">
          <button
            type="button"
            className="text-sm flex font-semibold  text-zinc-900 py-2 px-6 border border-zinc-200 hover:bg-zinc-50 transition-all rounded-lg shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="flex justify-center rounded-lg bg-zinc-900 px-6 transition-all py-2 text-sm font-semibold text-white shadow-sm hover:bg-zinc-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
          >
            Crear caso
          </button>
        </div>
      </div>
    </div>
  );
}
