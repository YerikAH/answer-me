import { DataHandler, ListUsers } from "@/components";
import { ListOptions } from "./components/list-options";
import { useEffect, useState } from "react";
import { useBatchFetch, useTitle } from "@/hooks";
import { useLawyersStore } from "@/store";
import { formatLawyers } from "@/utils";

const people = [
  {
    name: "Leslie Alexander",
    email: "leslie.alexander@example.com",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    id: "123",
  },
  {
    name: "Michael Foster",
    email: "michael.foster@example.com",
    role: "Co-Founder / CTO",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    id: "532",
  },
  {
    name: "Dries Vincent",
    email: "dries.vincent@example.com",
    role: "Business Relations",
    imageUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    id: "54",
  },
  {
    name: "Lindsay Walton",
    email: "lindsay.walton@example.com",
    role: "Front-end Developer",
    imageUrl:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    id: "8967",
  },
  {
    name: "Courtney Henry",
    email: "courtney.henry@example.com",
    role: "Designer",
    imageUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    id: "06",
  },
  {
    name: "Tom Cook",
    email: "tom.cook@example.com",
    role: "Director of Product",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    id: "54",
  },
];

export default function Lawyers() {
  const { changeTitle } = useTitle();
  const { fetchLawyers } = useBatchFetch();
  const { lawyersLoader, lawyersError, lawyers } = useLawyersStore();
  const [lawyersFormat, setLawyersFormat] = useState([]);

  useEffect(() => {
    if (lawyers?.docs === undefined) return;
    const newLawyers = lawyers.docs.map(formatLawyers);

    setLawyersFormat(newLawyers);
  }, [lawyers]);

  useEffect(() => {
    changeTitle("Abogados -  Arxatec");
    fetchLawyers();
  }, []);
  return (
    <div className="mt-12 w-full max-w-6xl mx-auto">
      <h2 className="text-xl font-semibold leading-7 text-zinc-900">
        Abogados
      </h2>
      <ListOptions />

      <DataHandler
        data={lawyers}
        error={lawyersError}
        isLoading={lawyersLoader}
        dataLength={lawyersFormat.length}
      >
        <ListUsers users={lawyersFormat} />
      </DataHandler>
    </div>
  );
}
