import { ContainerError } from "../container-error";
import { XCircleIcon } from "@heroicons/react/16/solid";
import { Loader } from "../loader";
import { getErrorMessage } from "@/utils";
import { FolderMinusIcon } from "@heroicons/react/20/solid";

interface Props {
  isLoading: boolean;
  error: {
    error: boolean;
    status: number;
    message: string;
  };
  data: unknown | null;
  children?: React.ReactNode;
  dataLength: number;
}

export const DataHandler = ({
  isLoading,
  error,
  data,
  children,
  dataLength,
}: Props) => {
  return (
    <>
      {isLoading && (
        <div className="h-[800px] w-full flex items-center justify-center">
          <Loader color="#000" size="sm" />
        </div>
      )}
      {!isLoading && error.error && data === null && (
        <ContainerError
          icon={XCircleIcon}
          message={getErrorMessage(error.status)}
          title="Opps, sucedió un error inesperado"
        />
      )}
      {!isLoading &&
        !error.error &&
        data !== null &&
        dataLength !== 0 &&
        children}
      {dataLength === 0 && !error.error && !isLoading && (
        <ContainerError
          icon={FolderMinusIcon}
          message="Actualmente no hay datos disponibles para mostrar. Puedes agregar nuevos registros o verificar si aplicaste algún filtro que limite los resultados."
          title="Opps, no tienes ningún registro"
        />
      )}
    </>
  );
};
