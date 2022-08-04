/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            maxWidth: {
                1920: "1920px",
                "50%": "50%",
                "55%": "55%",
                "60%": "60%",
                "65%": "65%",
                "70%": "70%",
                "75%": "75%",
                "80%": "80%",
                "85%": "85%",
                "90%": "90%",
                "95%": "95%",
            },
            width: {
                256: "256px",
                112: "28rem",
                128: "32rem",
                144: "36rem",
                160: "42rem",
            },
            height: {
                "8vh": "8vh",
                "10vh": "10vh",
                "84vh": "84vh",
                "92vh": "92vh",
                "60px": "60px",
                "80px": "80px",
                "160px": "160px",
                104: "26rem",
            },
            margin: {
                "10vh": "10vh",
            },
            translate: {
                "translate-0-5": "transform: translateX(0px,5px)",
            },
            backgroundPosition: {
                "l-50-0": "50% 0%",
            },
            screens: {
                xsm: "400px",
            },
            colors: {
                babyBlue: {
                    0: "#fafcfc",
                    50: "#f0faff",
                    100: "#def3fc",
                    200: "#bbe8fc",
                    300: "#90d1f0",
                    400: "#39bbf7",
                    500: "#0ea3e8",
                    600: "#0289c7",
                    700: "#036fa1",
                    800: "#075d85",
                    900: "#0c4f6e",
                    1500: "#253640",
                },
                royalPink: {
                    50: "#fcf2f4",
                    100: "#fce8eb",
                    200: "#facdd3",
                    300: "#faa7b2",
                    400: "#f57384",
                    500: "#ed4a5f",
                    600: "#db273f",
                    700: "#bf192f",
                    800: "#9e182a",
                    900: "#821726",
                    1500: "#381217",
                },
            },
            fontFamily: {
                "titan-one": ["Titan One"],
                "radio-canada": ["Radio Canada"],
            },
        },
    },
    plugins: [require("@tailwindcss/forms")],
};
