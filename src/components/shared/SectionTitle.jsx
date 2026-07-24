import clsx from "clsx";

export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  titleClassName,
}) {
  return (
    <div
      className={clsx(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow ? (
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-brand-600">
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={clsx(
          "text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl",
          titleClassName
        )}
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-base leading-relaxed text-slate-600">{description}</p>
      ) : null}
    </div>
  );
}
