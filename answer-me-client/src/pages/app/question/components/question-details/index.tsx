import { SectionHeader } from "@/components/app";
import { InformationCircleIcon } from "@heroicons/react/16/solid";

export const QuestionDetails = ({ data }: { data: any }) => (
  <div className="mt-16">
    <div className="px-4 sm:px-0">
      <SectionHeader
        icon={InformationCircleIcon}
        title="Información de la consulta"
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
            Título de la consulta
          </dt>
          <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
            {data.title}
          </dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-medium leading-6 text-gray-900">
            Descripción la consulta
          </dt>
          <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
            {data.description}
          </dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-medium leading-6 text-gray-900">
            Abogado asignado
          </dt>
          <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
            {data?.lawyer === undefined ? "Sin asignar" : data.lawyer.fullName}
          </dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-medium leading-6 text-gray-900">
            Respuesta
          </dt>
          <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
            {data?.response === undefined
              ? "Aún no tienes una respuesta"
              : data.response}
          </dd>
        </div>
      </dl>
    </div>
  </div>
);
