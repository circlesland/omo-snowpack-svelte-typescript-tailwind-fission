/** @type {import("snowpack").SnowpackUserConfig } */
const development = process.env.NODE_ENV === 'development';

module.exports = {
  mount: {
    public: '/',
    src: '/_dist_',
  },
  plugins: [
    '@snowpack/plugin-svelte',
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-typescript',
    ["@snowpack/plugin-webpack", {
      
    }],
    '@snowpack/plugin-postcss',
  ],
  install: [
    /* ... */
  ],
  installOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
    sourceMap: false,
  },
  proxy: {
    /* ... */
  },
  alias: {
    /* ... */
  },
};
