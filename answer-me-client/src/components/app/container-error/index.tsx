import { ArrowPathIcon } from "@heroicons/react/24/outline";

interface Props {
  title: string;
  message: string;
  icon: React.ElementType;
}
export const ContainerError = ({ title, message, icon: Icon }: Props) => {
  return (
    <div className="h-[800px] w-full flex items-center justify-center">
      <div className="max-w-96 w-full grid place-items-center ">
        <Icon className="size-12 text-zinc-800" />
        <h1 className="text-center font-semibold text-zinc-800 mt-2">
          {title}
        </h1>
        <p className="text-sm text-zinc-500 text-center">{message}</p>
        <button className="inline-flex mt-6 items-center gap-2 justify-center rounded-lg bg-zinc-900 px-6 transition-all py-2 text-sm font-semibold text-white shadow-sm hover:bg-zinc-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
          <ArrowPathIcon className="size-3.5" strokeWidth={3} />
          Volver a cargar
        </button>
      </div>
    </div>
  );
};
