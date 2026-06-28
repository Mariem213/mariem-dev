import useTheme from "../../../hooks/useTheme";

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="
                rounded-full
                border
                px-4
                py-2
                transition-all
                duration-300
            "
            style={{
                borderColor: "var(--color-border)",
                color: "var(--color-text-primary)",
                background: "var(--glass-bg)",
            }}
        >
            {theme === "light" ? "Dark" : "Light"}
        </button>
    );
};

export default ThemeToggle;