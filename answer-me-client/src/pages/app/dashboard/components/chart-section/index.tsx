import { ChartBarIcon, ChartPieIcon } from "@heroicons/react/20/solid";
import { BarChart } from "./bar-chart";
import { PieChart } from "./pie-chart";
import { SectionHeader } from "@/components/app";

export const ChartSection = () => {
  return (
    <div className="mt-8">
      <div className="grid md:grid-cols-[2fr_1fr] justify-between">
        <div>
          <SectionHeader
            icon={ChartBarIcon}
            title="Graficos de casos sucedidos"
          />
          <BarChart />
        </div>
        <div>
          <SectionHeader
            icon={ChartPieIcon}
            title="Graficos de casos sucedidos"
          />
          <PieChart />
        </div>
      </div>
    </div>
  );
};
