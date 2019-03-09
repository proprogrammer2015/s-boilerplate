const { resolvePath } = require('corresponding-path');
const { Html, Js, Css } = require('any-file-merge');
// const { Sass } = require('./transformations/Sass');
const { rollupTemplate } = require('./rollup.template');
const rollup = require('rollup');

const ext = '.html';
const output = './output';
const isWatchingFiles = false;

exports.watch = isWatchingFiles;
exports.quiet = false;
exports.output = output;
exports.fileName = `${ext}`; // TODO: when [name]-compiled was passed then have to change rollup input file name
exports.patterns = [
    './src/**',
    // `!./src/**/*${ext}`
];
exports.processors = [
    new Html(),
    new Js(),
    new Css()
];
exports.hooks = {
    ready: (all) => watch(all)
}

const createRollupConfig = paths => rollupTemplate(
    paths
        .map(path => resolvePath(path, output))
        .map(({ output, input }) => ({
            name: input.name,
            input: `${output.modulePath}${ext}`,
            output: `${output.modulePath.replace('./output', './dist')}`
        }))
);

const watch = paths => {
    const config = createRollupConfig(paths);

    const watcher = rollup.watch(config).on('event', event => {
        if (event.code === 'ERROR' || event.code === 'FATAL') {
            console.error(event.error);
        }
        if (event.code === 'BUNDLE_END') {
            console.log(`[ROLLUP] built ${event.input} in ${event.duration}ms`);
        }
        if (event.code === 'END' && !isWatchingFiles) {
            watcher.close();
        }
    });
}