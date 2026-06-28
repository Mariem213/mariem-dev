import { BUTTON_SIZES, BUTTON_VARIANTS } from "../../../constants/button";

const isDisabled = disabled || loading;

const Button = ({
    children,
    variant = "primary",
    size = "md",
    icon = null,
    loading = false,
    disabled = false,
    className = "",
    type = "button",
    ...props
}) => {
    const buttonClasses = [
        BUTTON_VARIANTS[variant],
        BUTTON_SIZES[size],
        className,
    ]
        .filter(Boolean)
        .join(" ");

    const buttonContent = loading ? (
        <span aria-live="polite">Loading...</span>
    ) : (
        <>
            {icon && (
                <span
                    className="flex items-center"
                    aria-hidden="true"
                >
                    {icon}
                </span>
            )}

            <span className="whitespace-nowrap">{children}</span>
        </>
    );

    return (
        <button
            type={type}
            className={buttonClasses}
            disabled={isDisabled}
            aria-disabled={isDisabled}
            {...props}
        >
            {buttonContent}
        </button>
    );
};

export default Button;