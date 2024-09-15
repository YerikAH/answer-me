import { SectionHeader, Table } from "@/components";
import { BriefcaseIcon } from "@heroicons/react/16/solid";
const people = [
  {
    id: "0001",
    date: "15 de Enero del 2024",
    case: "Me acusan de pedofilia extrema.",
    fullName: "Harvey Vasquez Huaranga Yerik",
    estimation: "S/ 1000.99",
  },
  {
    id: "0002",
    date: "23 de Julio del 2024",
    case: "Me acusan de fraude masivo.",
    fullName: "Carlos Ramirez Vega",
    estimation: "S/ 2500.50",
  },
  {
    id: "0003",
    date: "12 de Marzo del 2024",
    case: "Me acusan de robo cibernético.",
    fullName: "Ana Lucia Ortiz",
    estimation: "S/ 3200.75",
  },
  {
    id: "0004",
    date: "9 de Septiembre del 2024",
    case: "Me acusan de corrupción política.",
    fullName: "Marcos Perez Gutierrez",
    estimation: "S/ 5000.00",
  },
  {
    id: "0005",
    date: "7 de Abril del 2024",
    case: "Me acusan de malversación de fondos.",
    fullName: "Luisa Gomez Martinez",
    estimation: "S/ 7800.25",
  },
  {
    id: "0006",
    date: "30 de Junio del 2024",
    case: "Me acusan de fraude masivo.",
    fullName: "Juan Hernandez Lopez",
    estimation: "S/ 3500.99",
  },
  {
    id: "0007",
    date: "14 de Febrero del 2024",
    case: "Me acusan de robo cibernético.",
    fullName: "Pedro Sanchez Morales",
    estimation: "S/ 2200.00",
  },
  {
    id: "0008",
    date: "28 de Octubre del 2024",
    case: "Me acusan de corrupción política.",
    fullName: "Carmen Diaz Flores",
    estimation: "S/ 4000.45",
  },
  {
    id: "0009",
    date: "1 de Mayo del 2024",
    case: "Me acusan de malversación de fondos.",
    fullName: "Manuel Torres Reyes",
    estimation: "S/ 6000.75",
  },
  {
    id: "0010",
    date: "19 de Noviembre del 2024",
    case: "Me acusan de fraude masivo.",
    fullName: "Patricia Mendoza Silva",
    estimation: "S/ 2500.00",
  },
  {
    id: "0011",
    date: "3 de Diciembre del 2024",
    case: "Me acusan de pedofilia extrema.",
    fullName: "Ricardo Suarez Ruiz",
    estimation: "S/ 900.50",
  },
  {
    id: "0012",
    date: "21 de Febrero del 2024",
    case: "Me acusan de robo cibernético.",
    fullName: "Laura Romero Pineda",
    estimation: "S/ 3100.20",
  },
  {
    id: "0013",
    date: "27 de Agosto del 2024",
    case: "Me acusan de corrupción política.",
    fullName: "Jorge Aguilar Soto",
    estimation: "S/ 6500.00",
  },
  {
    id: "0014",
    date: "15 de Abril del 2024",
    case: "Me acusan de malversación de fondos.",
    fullName: "Diana Chavez Torres",
    estimation: "S/ 7200.40",
  },
  {
    id: "0015",
    date: "30 de Octubre del 2024",
    case: "Me acusan de fraude masivo.",
    fullName: "Oscar Vasquez Rivera",
    estimation: "S/ 2700.30",
  },
  {
    id: "0016",
    date: "9 de Junio del 2024",
    case: "Me acusan de pedofilia extrema.",
    fullName: "Claudia Gomez Perez",
    estimation: "S/ 1100.75",
  },
  {
    id: "0017",
    date: "3 de Septiembre del 2024",
    case: "Me acusan de robo cibernético.",
    fullName: "Andres Navarro Cruz",
    estimation: "S/ 3400.50",
  },
  {
    id: "0018",
    date: "12 de Mayo del 2024",
    case: "Me acusan de corrupción política.",
    fullName: "Julia Morales Fernandez",
    estimation: "S/ 5600.99",
  },
  {
    id: "0019",
    date: "5 de Julio del 2024",
    case: "Me acusan de malversación de fondos.",
    fullName: "Josefa Medina Campos",
    estimation: "S/ 8600.25",
  },
  {
    id: "0020",
    date: "20 de Agosto del 2024",
    case: "Me acusan de fraude masivo.",
    fullName: "Miguel Herrera Lopez",
    estimation: "S/ 4800.50",
  },
];

export const TableLastCases = () => {
  return (
    <div className="mt-8">
      <SectionHeader icon={BriefcaseIcon} title="Últimos casos sin resolver" />
      <Table
        data={people}
        headers={[
          "ID",
          "Fecha de publicación",
          "Casos",
          "Nombre completo",
          "Estimación",
        ]}
      />
    </div>
  );
};
