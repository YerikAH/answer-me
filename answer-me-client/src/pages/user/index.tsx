import {
  GoBack,
  SectionHeader,
  Stats,
  Table,
  UserDetailCard,
} from "@/components";
import { useTitle } from "@/hooks";
import { ROUTES } from "@/router/routes";
import { TableCellsIcon } from "@heroicons/react/16/solid";
import { ArrowTrendingUpIcon } from "@heroicons/react/24/outline";
import { useEffect } from "react";

const stats = [
  {
    name: "Revenue",
    value: "$405,091.00",
    change: "+4.75%",
    changeType: "positive",
  },
  {
    name: "Overdue invoices",
    value: "$12,787.00",
    change: "+54.02%",
    changeType: "negative",
  },
  {
    name: "Outstanding invoices",
    value: "$245,988.00",
    change: "-1.39%",
    changeType: "positive",
  },
];

const people = [
  {
    id: "0001",
    date: "15 de Enero del 2024",
    case: "Me acusan de pedofilia extrema.",
    fullName: "Harvey Vasquez Huaranga Yerik",
    estimation: "1000.99",
  },
  {
    id: "0002",
    date: "23 de Julio del 2024",
    case: "Me acusan de fraude masivo.",
    fullName: "Carlos Ramirez Vega",
    estimation: "2500.50",
  },
  {
    id: "0003",
    date: "12 de Marzo del 2024",
    case: "Me acusan de robo cibernético.",
    fullName: "Ana Lucia Ortiz",
    estimation: "3200.75",
  },
  {
    id: "0004",
    date: "9 de Septiembre del 2024",
    case: "Me acusan de corrupción política.",
    fullName: "Marcos Perez Gutierrez",
    estimation: "5000.00",
  },
  {
    id: "0005",
    date: "7 de Abril del 2024",
    case: "Me acusan de malversación de fondos.",
    fullName: "Luisa Gomez Martinez",
    estimation: "7800.25",
  },
  {
    id: "0006",
    date: "30 de Junio del 2024",
    case: "Me acusan de fraude masivo.",
    fullName: "Juan Hernandez Lopez",
    estimation: "3500.99",
  },
  {
    id: "0007",
    date: "14 de Febrero del 2024",
    case: "Me acusan de robo cibernético.",
    fullName: "Pedro Sanchez Morales",
    estimation: "2200.00",
  },
  {
    id: "0008",
    date: "28 de Octubre del 2024",
    case: "Me acusan de corrupción política.",
    fullName: "Carmen Diaz Flores",
    estimation: "4000.45",
  },
  {
    id: "0009",
    date: "1 de Mayo del 2024",
    case: "Me acusan de malversación de fondos.",
    fullName: "Manuel Torres Reyes",
    estimation: "6000.75",
  },
  {
    id: "0010",
    date: "19 de Noviembre del 2024",
    case: "Me acusan de fraude masivo.",
    fullName: "Patricia Mendoza Silva",
    estimation: "2500.00",
  },
  {
    id: "0011",
    date: "3 de Diciembre del 2024",
    case: "Me acusan de pedofilia extrema.",
    fullName: "Ricardo Suarez Ruiz",
    estimation: "900.50",
  },
  {
    id: "0012",
    date: "21 de Febrero del 2024",
    case: "Me acusan de robo cibernético.",
    fullName: "Laura Romero Pineda",
    estimation: "3100.20",
  },
  {
    id: "0013",
    date: "27 de Agosto del 2024",
    case: "Me acusan de corrupción política.",
    fullName: "Jorge Aguilar Soto",
    estimation: "6500.00",
  },
  {
    id: "0014",
    date: "15 de Abril del 2024",
    case: "Me acusan de malversación de fondos.",
    fullName: "Diana Chavez Torres",
    estimation: "7200.40",
  },
  {
    id: "0015",
    date: "30 de Octubre del 2024",
    case: "Me acusan de fraude masivo.",
    fullName: "Oscar Vasquez Rivera",
    estimation: "2700.30",
  },
  {
    id: "0016",
    date: "9 de Junio del 2024",
    case: "Me acusan de pedofilia extrema.",
    fullName: "Claudia Gomez Perez",
    estimation: "1100.75",
  },
  {
    id: "0017",
    date: "3 de Septiembre del 2024",
    case: "Me acusan de robo cibernético.",
    fullName: "Andres Navarro Cruz",
    estimation: "3400.50",
  },
  {
    id: "0018",
    date: "12 de Mayo del 2024",
    case: "Me acusan de corrupción política.",
    fullName: "Julia Morales Fernandez",
    estimation: "5600.99",
  },
  {
    id: "0019",
    date: "5 de Julio del 2024",
    case: "Me acusan de malversación de fondos.",
    fullName: "Josefa Medina Campos",
    estimation: "8600.25",
  },
  {
    id: "0020",
    date: "20 de Agosto del 2024",
    case: "Me acusan de fraude masivo.",
    fullName: "Miguel Herrera Lopez",
    estimation: "4800.50",
  },
];

export default function User() {
  const { changeTitle } = useTitle();
  useEffect(() => {
    changeTitle("Usuarios -  Arxatec");
  }, []);
  return (
    <div className="mx-auto max-w-6xl w-full mt-12">
      <GoBack name="Usuarios" route={ROUTES.USERS} />
      <UserDetailCard />
      <SectionHeader icon={ArrowTrendingUpIcon} title="Actividad" />
      <Stats stats={stats} />
      <SectionHeader icon={TableCellsIcon} title="Casos del usuario" />
      <Table
        data={people}
        headers={[
          "ID",
          "Fecha de publicación",
          "Caso",
          "Nombre completo",
          "Estimación",
        ]}
      />
    </div>
  );
}
