import { FetchResult } from "@/types";
import { Bounce, toast } from "react-toastify";

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
export function textToRoute(text: string) {
  return text.trim().replaceAll(" ", "-").toLowerCase();
}
export function greetBasedOnTime() {
  const now = new Date();
  const hours = now.getHours();

  if (hours >= 6 && hours < 12) {
    return "Buenos días";
  } else if (hours >= 12 && hours < 18) {
    return "Buenas tardes";
  } else {
    return "Buenas noches";
  }
}

export function formatDateToReadable(isoDate: string) {
  const date = new Date(isoDate);

  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${day} de ${month} del ${year}`;
}

export function getCategoryStyles(category: string) {
  switch (category) {
    case "gold":
      return "bg-amber-100 text-amber-500 border-amber-200";
    case "silver":
      return "bg-gray-100 text-gray-500 border-gray-200";
    case "copper":
      return "bg-green-100 text-green-500 border-green-200";
    default:
      return "bg-blue-100 text-blue-500 border-blue-200";
  }
}

type ErrorMessages = {
  [key: number]: string;
};
export const errorMessages: ErrorMessages = {
  0: "Sucedio un error desconocido.",
  400: "Hubo un problema con la solicitud. Por favor, verifica los datos enviados y vuelve a intentarlo.",
  401: "No tienes autorización para acceder a este recurso.",
  403: "No tienes permiso para realizar esta acción.",
  404: "No pudimos encontrar el recurso que estabas buscando.",
  500: "Ocurrió un error en nuestro servidor.",
};

export function getErrorMessage(status: number) {
  return (
    errorMessages[status] ||
    "Ocurrió un error inesperado. Por favor, intenta nuevamente más tarde."
  );
}

export function handleFetchResponse(
  res: FetchResult,
  onSuccess?: () => void,
  onFailure?: () => void,
  successMessage?: string
) {
  if (res.error.error && !res.loader) {
    toast.error(getErrorMessage(res.error.status), {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
    onFailure && onFailure();
  } else if (!res.error.error && !res.loader && res.data !== null) {
    onSuccess && onSuccess();
    toast.success(successMessage || "Operación exitosa.", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  }
}
