const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    darkMode: "class",
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./vendor/laravel/jetstream/**/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            borderRadius: {
                "4xl": "42px",
            },
            colors: {
                greeny: "#5cd258",
                darki: {
                    100: "#dddddd",
                    200: "#b8b8c2",
                    300: "#3f4450",
                    400: "#363d49",
                    500: "#343a43",
                    600: "#2e343d",
                    700: "#2d2d39",
                    800: "#282b33",
                    900: "#262931",
                },
                fontFamily: {
                    sans: ["Nunito", ...defaultTheme.fontFamily.sans],
                },
            },
        },
    },

    plugins: [
        require("@tailwindcss/forms"),
        require("@tailwindcss/typography"),
    ],
};
