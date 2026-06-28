import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import useTheme from "../../../hooks/useTheme";
import { themeToggleAnimation, themeToggleButtonAnimation, themeToggleIconAnimation } from "../../../constants/animations";
import { ICON_SIZE, ICON_STROKE } from "../../../constants/icons";

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    const isDarkMode = theme === "dark";
    const buttonLabel = isDarkMode
        ? "Switch to light mode"
        : "Switch to dark mode";

    return (
        <motion.button
            type="button"
            onClick={toggleTheme}
            aria-label={buttonLabel}
            title={buttonLabel}
            className="
                flex
                items-center
                justify-center
                w-11
                h-11
                rounded-full
                backdrop-blur-md
                focus:outline-none
                focus-visible:ring-2
            "
            style={{
                background: "var(--glass-bg)",
                border: "1px solid var(--glass-border)",
                color: "var(--color-primary)",
                boxShadow: "0 0 0 2px transparent",
            }}
            whileHover={themeToggleButtonAnimation.whileHover}

            whileTap={themeToggleButtonAnimation.whileTap}
        >
            <AnimatePresence mode="wait">
                <motion.div
                    whileHover={themeToggleIconAnimation.whileHover}
                    key={theme}
                    initial={themeToggleAnimation.initial}
                    animate={themeToggleAnimation.animate}
                    exit={themeToggleAnimation.exit}
                    transition={themeToggleAnimation.transition}
                >
                    {isDarkMode ? (
                        <Moon
                            size={ICON_SIZE}
                            strokeWidth={ICON_STROKE}
                        />
                    ) : (
                        <Sun
                            size={ICON_SIZE}
                            strokeWidth={ICON_STROKE}
                        />
                    )}
                </motion.div>
            </AnimatePresence>
        </motion.button>
    );
};

export default ThemeToggle;