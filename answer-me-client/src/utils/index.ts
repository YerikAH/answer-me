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
