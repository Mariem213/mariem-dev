const BUTTON_BASE =
    "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

export const BUTTON_VARIANTS = {
    primary: [
        BUTTON_BASE,
        "bg-[var(--color-primary)]",
        "text-[var(--color-background)]",
        "hover:opacity-90",
    ].join(" "),

    outline: [
        BUTTON_BASE,
        "border",
        "border-[var(--color-primary)]",
        "text-[var(--color-primary)]",
        "bg-transparent",
        "hover:bg-[var(--color-primary)]",
        "hover:text-[var(--color-background)]",
    ].join(" "),

    ghost: [
        BUTTON_BASE,
        "bg-transparent",
        "text-[var(--color-primary)]",
        "hover:bg-[var(--glass-bg)]",
    ].join(" "),
};

export const BUTTON_SIZES = {
    sm: "h-9 px-4 text-sm",
    md: "h-11 px-6 text-base",
    lg: "h-14 px-8 text-lg",
};