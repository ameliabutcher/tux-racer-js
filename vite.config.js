export default {
  base: "./",
  build: {
    target: "esnext",
  },
  server: {
    port: 9292,
    allowedHosts: "all"
  },
  preview: {
    port: 9292,
    host: "0.0.0.0",
    allowedHosts: "all"
  }
};
