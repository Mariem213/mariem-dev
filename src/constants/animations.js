// Theme Toggle Animation
export const themeToggleAnimation = {
    initial: {
        rotate: -180,
        scale: 0.5,
        opacity: 0,
    },

    animate: {
        rotate: 0,
        scale: 1,
        opacity: 1,
    },

    exit: {
        rotate: 180,
        scale: 0.5,
        opacity: 0,
    },

    transition: {
        duration: 0.35,
        ease: "easeInOut",
    },
};

export const themeToggleButtonAnimation = {
    whileHover: {
        scale: 1.08,
        boxShadow: "0 0 18px rgba(212,175,55,.25)",
    },

    whileTap: {
        scale: 0.95,
    },
};

export const themeToggleIconAnimation = {
    whileHover: {
        rotate: 15,
    },
};