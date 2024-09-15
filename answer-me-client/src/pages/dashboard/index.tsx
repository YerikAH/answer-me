import { GreetHeader } from "./components/greet-header";
import { useTitle } from "@/hooks";
import { useEffect } from "react";
import { TableLastCases } from "./components/table-last-cases";
import { Stats } from "@/components";
import { CircleStackIcon } from "@heroicons/react/20/solid";
import { ChartSection } from "./components/chart-section";

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
  {
    name: "Expenses",
    value: "$30,156.00",
    change: "+10.18%",
    changeType: "negative",
  },
];

export default function Dashboard() {
  const { changeTitle } = useTitle();
  useEffect(() => {
    changeTitle("Dashboard -  Arxatec");
  }, []);
  return (
    <div className="mx-auto w-full max-w-6xl mt-12">
      <GreetHeader />
      <div>
        <div className="flex justify-between items-center mt-8">
          <h2 className="text-base font-semibold mt-6 mb-3 flex items-center gap-2">
            <span className="bg-zinc-200 size-8 flex items-center justify-center rounded-full">
              <CircleStackIcon className="text-zinc-900 size-4" />
            </span>
            Resumen
          </h2>
        </div>
        <Stats stats={stats} />
      </div>
      <ChartSection />
      <TableLastCases />
    </div>
  );
}
