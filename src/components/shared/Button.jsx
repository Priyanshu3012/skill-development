import Link from "next/link";
import clsx from "clsx";

const variants = {
  primary:
    "bg-brand-600 text-white hover:bg-brand-700 focus-visible:outline-brand-600 shadow-sm shadow-brand-600/20",
  accent:
    "bg-accent-600 text-white hover:bg-accent-700 focus-visible:outline-accent-600 shadow-sm shadow-accent-600/20",
  outline:
    "border border-slate-300 text-slate-700 hover:border-brand-600 hover:text-brand-600 focus-visible:outline-brand-600",
  ghost: "text-slate-700 hover:bg-slate-100 focus-visible:outline-brand-600",
  white: "bg-white text-brand-700 hover:bg-brand-50 focus-visible:outline-white shadow-sm",
};

const sizes = {
  sm: "px-3.5 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3.5 text-base",
};

export default function Button({
  as,
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}) {
  const classes = clsx(
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none",
    variants[variant],
    sizes[size],
    className
  );

  const Component = as ?? (href ? Link : "button");

  if (Component === Link) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
