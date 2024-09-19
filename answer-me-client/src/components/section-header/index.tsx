import React from "react";

interface Props {
  title: string;
  icon: React.ElementType;
  color?: string;
  backgroundColor?: string;
}

export const SectionHeader = ({
  title,
  icon: Icon,
  color,
  backgroundColor,
}: Props) => {
  return (
    <div className="flex justify-between items-center">
      <h2 className="text-base font-semibold mt-6 mb-3 flex items-center gap-2">
        <span
          className={`size-8 flex items-center justify-center rounded-full ${
            backgroundColor ? `bg-[${backgroundColor}]` : "bg-slate-200"
          }`}
        >
          <Icon
            className={`text-slate-900 size-4 ${color ? `` : "text-slate-900"}`}
          />
        </span>
        {title}
      </h2>
    </div>
  );
};
