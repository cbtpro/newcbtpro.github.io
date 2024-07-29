import terser from "@rollup/plugin-terser";

export default {
  input: "src/main.jsx",
  output: {
    file: "dist/uvc.esm.js",
    format: "esm",
  },
  external: ["react", "vue"],
  plugins: [
    terser({
      compress: {
        drop_console: true
      },
      sourceMap: true
    })
  ],
};
