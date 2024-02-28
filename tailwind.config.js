// /** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
// module.exports = {
//     content: ["./src/**/*.{js,jsx,ts,tsx}"],
//     theme: {
//         extend: {},
//     },
//     plugins: [],
// };

module.exports = withMT({
    content: ["./src/**/*.{jsx}",
    "./node_modules/@material-tailwind/react/components/Navbar/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {},
    },
    plugins: [],
});
