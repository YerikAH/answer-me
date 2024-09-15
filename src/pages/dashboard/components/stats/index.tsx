import { classNames } from "@/utils";
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

export const Stats = () => {
  return (
    <>
      <div className="flex justify-between items-center mt-8">
        <h2 className="text-base font-semibold mt-6 mb-3 flex items-center gap-2">
          <span className="bg-zinc-200 size-8 flex items-center justify-center rounded-full">
            <CircleStackIcon className="text-zinc-900 size-4" />
          </span>
          Resumen
        </h2>
      </div>
      <dl className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 py-6  border-t"
          >
            <dt className="text-sm font-medium leading-6 text-gray-500">
              {stat.name}
            </dt>

            <dd className="w-full flex-none text-3xl font-medium leading-10 tracking-tight text-gray-900">
              {stat.value}
            </dd>

            <div className="flex items-center gap-1">
              <span
                className={`${
                  stat.changeType === "negative"
                    ? "bg-red-500/15 text-red-500"
                    : "bg-green-500/15 text-green-500"
                } rounded-md px-2 py-1 text-xs font-semibold`}
              >
                +4.5%
              </span>
              <p className="text-zinc-500 text-xs">from last week</p>
            </div>
          </div>
        ))}
      </dl>
    </>
  );
};
