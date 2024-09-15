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

// Ejemplo de uso:
const formattedDate = formatDateToReadable("2024-07-23T14:48:00.000Z");
console.log(formattedDate); // 23 de Julio del 2024
