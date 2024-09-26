interface Props {
  icon: React.ElementType;
  label: string;
}
export const IconLabel = ({ label, icon: Icon }: Props) => {
  return (
    <span className="flex items-center gap-2">
      <Icon className="text-zinc-600 size-5" />
      <p className="text-sm font-medium text-zinc-900">{label}</p>
    </span>
  );
};
