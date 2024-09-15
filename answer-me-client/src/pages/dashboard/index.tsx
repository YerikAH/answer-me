import { GreetHeader } from "./components/greet-header";
import { useTitle } from "@/hooks";
import { useEffect } from "react";
import { TableLastCases } from "./components/table-last-cases";
import { ChartSection } from "./components/chart-section";
import { StatsSection } from "./components/stats-section";

export default function Dashboard() {
  const { changeTitle } = useTitle();
  useEffect(() => {
    changeTitle("Dashboard -  Arxatec");
  }, []);
  return (
    <div className="mx-auto w-full max-w-6xl mt-12">
      <GreetHeader />
      <StatsSection />
      <ChartSection />
      <TableLastCases />
    </div>
  );
}
