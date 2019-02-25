const { BaseTransformation } = require('svelte-module-combine/lib/index');
const sass = require('node-sass');

class Sass extends BaseTransformation {
  constructor(ext = 'scss', isRequired = false) {
    super(ext, isRequired);
  }

  transform(buffer) {
    const data = buffer.toString('utf8');
    const content = sass.renderSync({
      data
    });
    return `<style>${content.css.toString('utf8')}</style>`;
  }

}

exports.Sass = Sass;