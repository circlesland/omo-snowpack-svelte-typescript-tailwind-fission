const sveltePreprocess = require('svelte-preprocess');
const development = process.env.NODE_ENV === 'development';

module.exports = {
  preprocess: sveltePreprocess({
    defaults: {
      script: 'typescript',
    }
  }),
  css: css => {
    css.write('bundle.css');
  },
  dev: development,
};