import { Stats } from "./components/stats";
import { BarChart } from "./components/bar-chart";
import { GreetHeader } from "./components/greet-header";
import { useTitle } from "@/hooks";
import { useEffect } from "react";
import { TableLastCases } from "./components/table-last-cases";
import { ChartBarIcon } from "@heroicons/react/16/solid";

export default function Dashboard() {
  const { changeTitle } = useTitle();
  useEffect(() => {
    changeTitle("Dashboard -  Arxatec");
  }, []);
  return (
    <div className="mx-auto w-full max-w-6xl mt-12">
      <GreetHeader />
      <Stats />
      <div>
        <div className="flex justify-between items-center mt-8">
          <h2 className="text-base font-semibold mt-6 mb-3 flex items-center gap-2">
            <span className="bg-zinc-200 size-8 flex items-center justify-center rounded-full">
              <ChartBarIcon className="text-zinc-900 size-4" />
            </span>
            Grafico de casos sucedidos
          </h2>
        </div>
        <div className="grid">
          <BarChart />
          {/* <RadialChart /> */}
        </div>
      </div>
      <TableLastCases />
    </div>
  );
}
