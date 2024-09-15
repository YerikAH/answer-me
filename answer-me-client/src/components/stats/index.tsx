interface Props {
  stats: {
    name: string;
    value: string;
    change: string;
    changeType: string;
  }[];
}
export const Stats = ({ stats }: Props) => {
  return (
    <dl
      className={`mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${stats.length} gap-16`}
    >
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
  );
};
