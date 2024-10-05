import { DataHandler, ListUsersSimple } from "@/components";
import { ListOptions } from "./components/list-options";
import { useEffect, useState } from "react";
import { useBatchFetch, useTitle } from "@/hooks";
import { useCustomersStore } from "@/store";
import { formatCustomers } from "@/utils";

export default function Users() {
  const { changeTitle } = useTitle();
  const { fetchCustomers } = useBatchFetch();
  const { customers, customersError, customersLoader } = useCustomersStore();
  const [customersFormat, setCustomersFormat] = useState([]);

  useEffect(() => {
    console.log(customers);

    if (customers?.docs === undefined) return;
    const newCustomers = customers.docs.map(formatCustomers);

    setCustomersFormat(newCustomers);
  }, [customers]);

  useEffect(() => {
    changeTitle("Usuarios -  Arxatec");
    fetchCustomers();
  }, []);
  return (
    <div className="mt-12 w-full max-w-6xl mx-auto">
      <h2 className="text-xl font-semibold leading-7 text-zinc-900">
        Usuarios
      </h2>
      <ListOptions />

      <DataHandler
        data={customers}
        error={customersError}
        isLoading={customersLoader}
        dataLength={customersFormat.length}
      >
        <ListUsersSimple people={customersFormat} />
      </DataHandler>
    </div>
  );
}
