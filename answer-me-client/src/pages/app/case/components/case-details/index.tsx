import { SectionHeader } from "@/components/app";
import { PaperClipIcon } from "@heroicons/react/16/solid";
import { InformationCircleIcon } from "@heroicons/react/20/solid";

export const CaseDetails = ({ data }: { data: any }) => (
  <div className="mt-16">
    <div className="px-4 sm:px-0">
      <SectionHeader
        icon={InformationCircleIcon}
        title="Información del caso"
      />
      <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
        Una vista general de los detalles clave del caso, incluyendo fechas
        importantes, partes involucradas, y el estado actual del procedimiento
        legal.
      </p>
    </div>

    <div className="mt-6 border-t border-gray-100">
      <dl className="divide-y divide-gray-100">
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-medium leading-6 text-gray-900">
            Nombre completo
          </dt>
          <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
            {data.user.associatedCustomer.fullName}
          </dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-medium leading-6 text-gray-900">
            Correo electrónico
          </dt>
          <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
            {data.user.email}
          </dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-medium leading-6 text-gray-900">
            Número de celular
          </dt>
          <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
            {data.user.associatedCustomer.phoneNumber}
          </dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-medium leading-6 text-gray-900">
            Abogado asignado
          </dt>
          <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
            Sin asignar
          </dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-medium leading-6 text-gray-900">
            Descripción del problema legal
          </dt>
          <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
            {data.description}
          </dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-medium leading-6 text-gray-900">
            Documentos adjuntos
          </dt>
          <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
            <ul
              role="list"
              className="divide-y divide-gray-100 rounded-md border border-gray-200"
            >
              <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                <div className="flex w-0 flex-1 items-center">
                  <PaperClipIcon
                    aria-hidden="true"
                    className="h-5 w-5 flex-shrink-0 text-gray-400"
                  />
                  <div className="ml-4 flex min-w-0 flex-1 gap-2">
                    <span className="truncate font-medium">
                      resume_back_end_developer.pdf
                    </span>
                    <span className="flex-shrink-0 text-gray-400">2.4mb</span>
                  </div>
                </div>
                <div className="ml-4 flex-shrink-0">
                  <a
                    href="#"
                    className="font-medium text-blue-500 hover:text-blue-500"
                  >
                    Download
                  </a>
                </div>
              </li>
              <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                <div className="flex w-0 flex-1 items-center">
                  <PaperClipIcon
                    aria-hidden="true"
                    className="h-5 w-5 flex-shrink-0 text-gray-400"
                  />
                  <div className="ml-4 flex min-w-0 flex-1 gap-2">
                    <span className="truncate font-medium">
                      coverletter_back_end_developer.pdf
                    </span>
                    <span className="flex-shrink-0 text-gray-400">4.5mb</span>
                  </div>
                </div>
                <div className="ml-4 flex-shrink-0">
                  <a
                    href="#"
                    className="font-medium text-blue-500 hover:text-blue-500"
                  >
                    Download
                  </a>
                </div>
              </li>
            </ul>
          </dd>
        </div>
      </dl>
    </div>
  </div>
);
