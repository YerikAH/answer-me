import { useTitle } from "@/hooks";
import { UserCircleIcon } from "@heroicons/react/20/solid";
import { useEffect } from "react";

export default function Settings() {
  const { changeTitle } = useTitle();
  useEffect(() => {
    changeTitle("Configuración -  Arxatec");
  }, []);
  return (
    <form className="w-full max-w-4xl mx-auto mt-12 h-auto min-h-[100%]">
      <div className="space-y-12 sm:space-y-16">
        <div>
          <h2 className="text-xl font-semibold leading-7 text-zinc-900">
            Configuración
          </h2>

          <div className="mt-10 space-y-8 border-b border-gray-900/10 pb-12 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:pb-0">
            <div>
              <div className="sm:grid sm:grid-cols-2 sm:items-start sm:gap-4 py-6">
                <div>
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
                  >
                    Nombre completo
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
                    className="block w-full rounded-lg border-0 py-1.5 text-gray-900 bg-zinc-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-zinc-500  focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-2 sm:items-start sm:gap-4 py-6">
                <div>
                  <label
                    htmlFor="about"
                    className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
                  >
                    Tu biografía
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
                    rows={3}
                    placeholder="Ej. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit quidem tempora sed quis maxime facere consequatur."
                    className="block w-full max-w-2xl rounded-lg border-0 bg-zinc-100 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-zinc-500 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>

            <div>
              <div className="sm:grid sm:grid-cols-2 sm:items-start sm:gap-4 py-6">
                <div>
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
                  >
                    Correo elétronico
                  </label>
                  <p className="text-zinc-500 text-sm mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Doloribus saepe labore magni repudiandae impedit nemo.
                  </p>
                </div>

                <div>
                  <input
                    id="username"
                    name="username"
                    type="text"
                    autoComplete="username"
                    placeholder="Ej. john@example.com"
                    className="block w-full rounded-lg border-0 py-1.5 bg-zinc-100 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-zinc-500  focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-2 sm:items-start sm:gap-4 py-6">
                <div>
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
                  >
                    Número de DNI
                  </label>
                  <p className="text-zinc-500 text-sm mt-2">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Cupiditate dignissimos magni.
                  </p>
                </div>

                <div>
                  <input
                    id="username"
                    name="username"
                    type="text"
                    autoComplete="username"
                    placeholder="Ej. 12345678"
                    className="block w-full rounded-lg border-0 py-1.5 text-gray-900 bg-zinc-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-zinc-500 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-2 sm:items-start sm:gap-4 py-6">
                <div>
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
                  >
                    Número de celular
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
                    placeholder="+51 123456789"
                    className="block w-full rounded-lg border-0 py-1.5 text-gray-900 bg-zinc-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-zinc-500 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-2 sm:items-center sm:gap-4 sm:py-6">
              <div>
                <label
                  htmlFor="about"
                  className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
                >
                  Fotografía profesional
                </label>
                <p className="text-zinc-500 text-sm mt-2">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Fugit quidem tempora sed quis maxime facere consequatur.
                </p>
              </div>
              <div>
                <div className="flex items-center gap-x-3">
                  <UserCircleIcon
                    aria-hidden="true"
                    className="h-12 w-12 text-gray-300"
                  />
                  <button
                    type="button"
                    className="rounded-lg bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  >
                    Change
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-4">
        <button
          type="button"
          className="text-sm font-semibold leading-6 text-gray-900 py-2.5 px-6 bg-zinc-50 hover:bg-zinc-200 transition-all rounded-lg"
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="inline-flex justify-center rounded-lg bg-zinc-900 px-6 transition-all py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-zinc-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          Guardar cambios
        </button>
      </div>
    </form>
  );
}
