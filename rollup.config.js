const resolve = require("@rollup/plugin-node-resolve");
const typescript = require("@rollup/plugin-typescript");
const commonjs = require("@rollup/plugin-commonjs");

module.exports = [
    {
        input: "./src/index.ts",
        output: [
            {
                dir: "lib",
                format: "cjs",
                entryFileNames: "[name].cjs.js",
                sourcemap: false,
            },
            {
                dir: "lib",
                format: "esm",
                entryFileNames: "[name].esm.js",
                sourcemap: false,
            },
            {
                dir: "lib",
                format: "umd",
                entryFileNames: "[name].umd.js",
                name: "joo",
            },
        ],
        plugins: [resolve(), commonjs(), typescript({ module: "ESNext" })],
    },
];
