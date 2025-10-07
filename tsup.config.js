import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  sourcemap: true,
  clean: true,
  target: "es2020",
  treeshake: true,
  splitting: false, // libraries usually prefer single-file per entry
  minify: false, // leave minification to app bundlers
  external: ["react", "react-dom", "next"],
});
