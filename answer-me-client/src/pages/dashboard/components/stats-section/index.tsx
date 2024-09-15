import { SectionHeader, Stats } from "@/components";
import { CircleStackIcon } from "@heroicons/react/20/solid";

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

export const StatsSection = () => {
  return (
    <div className="mt-8">
      <SectionHeader title="Resumen" icon={CircleStackIcon} />
      <Stats stats={stats} />
    </div>
  );
};
