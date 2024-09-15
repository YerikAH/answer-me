import { ChartBarIcon, ChartPieIcon } from "@heroicons/react/20/solid";
import { BarChart } from "./bar-chart";
import { PieChart } from "./pie-chart";

export const ChartSection = () => {
  return (
    <div className="mt-8">
      <div className="grid md:grid-cols-[2fr_1fr] justify-between">
        <div>
          <div className="flex justify-between items-center">
            <h2 className="text-base font-semibold mt-6 mb-3 flex items-center gap-2">
              <span className="bg-zinc-200 size-8 flex items-center justify-center rounded-full">
                <ChartBarIcon className="text-zinc-900 size-4" />
              </span>
              Grafico de casos sucedidos
            </h2>
          </div>
          <BarChart />
        </div>
        <div>
          <div className="flex justify-between items-center">
            <h2 className="text-base font-semibold mt-6 mb-3 flex items-center gap-2">
              <span className="bg-zinc-200 size-8 flex items-center justify-center rounded-full">
                <ChartPieIcon className="text-zinc-900 size-4" />
              </span>
              Grafico de casos sucedidos
            </h2>
          </div>
          <PieChart />
        </div>
      </div>
    </div>
  );
};
