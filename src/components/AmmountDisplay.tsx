import { formatCurrency } from "../helpers";

type AmmountDisplayProps = {
  label: string;
  amount: number;
};

export default function AmmountDisplay({ label, amount }: AmmountDisplayProps) {
  return (
    <p className="text-2xl text-blue-600 font-bold">
      {label}:{" "}
      <span className="font-black text-black">{formatCurrency(amount)}</span>
    </p>
  );
}
