import React from "react";

interface Props {
  title: string;
  icon: React.ElementType;
}

export const SectionHeader = ({ title, icon: Icon }: Props) => {
  return (
    <div className="flex justify-between items-center">
      <h2 className="text-base font-semibold mt-6 mb-3 flex items-center gap-2">
        <span className="bg-zinc-200 size-8 flex items-center justify-center rounded-full">
          <Icon className="text-zinc-900 size-4" />
        </span>
        {title}
      </h2>
    </div>
  );
};
