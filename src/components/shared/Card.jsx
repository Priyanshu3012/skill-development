import clsx from "clsx";

export default function Card({ as: Tag = "div", className, children, ...props }) {
  return (
    <Tag
      className={clsx(
        "rounded-2xl border border-slate-200/70 bg-white shadow-sm shadow-slate-900/[0.03] transition-all duration-300",
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
