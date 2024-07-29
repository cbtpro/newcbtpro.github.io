import terser from "@rollup/plugin-terser";

export default {
  input: "./src/main.js",
  output: {
    file: "dist/usevue.cjs.js",
    format: "cjs",
  },
  plugins: [
    terser({
      compress: {
        drop_console: true,
      },
      sourceMap: true,
    }),
  ],
};
