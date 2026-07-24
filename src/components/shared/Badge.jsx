import clsx from "clsx";

const tones = {
  brand: "bg-brand-50 text-brand-700 ring-1 ring-inset ring-brand-600/20",
  accent: "bg-accent-50 text-accent-700 ring-1 ring-inset ring-accent-600/20",
  neutral: "bg-slate-100 text-slate-700 ring-1 ring-inset ring-slate-500/10",
};

export default function Badge({ tone = "brand", className, children }) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold",
        tones[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
