const fs = require('fs');
const color = require('colors');
const { resolvePath } = require('corresponding-path');
const { Html, Js } = require('svelte-module-combine');
const { Sass } = require('./transformations/Sass');
const { rollupTemplate } = require('./rollup.template');
const rollup = require('rollup');
// TODO: create files-merge cli component

// TODO: svelte-module-combine as wrapper on files-merge


// TODO: paths improvement
const output = './output';
exports.watch = false;
exports.patterns = [
    './src/**'
];
exports.output = output;
exports.outputExtension = 'html';
exports.processors = [
    new Html(),
    new Js(),
    new Sass()
];
const log = (fontColor, text) => console.log(`${color.rainbow('[SMC]')} ${color[fontColor](text)}`)

// TODO: path improvement to display proper compiled/built
exports.entrypoints = {
    error: msg => log('red', `ERROR: ${msg}`),
    delete: path => log('grey', `${path} was removed.`),
    add: (path, all) => log('green', `${path} was added.`),
    change: (path, all) => log('yellow', `${path} was changed.`),
    compile: (path, all) => log('green', `${path} was compiled.`),
    ready: (_, all) => {
        generateRollupConfig(all);
        console.table(color.rainbow(`[svelte-module-combine]`))
    }
}

const generateRollupConfig = paths => {
    const watchOptions = rollupTemplate(
        paths.map(path => resolvePath(path, output))
            .filter(({ ext }) => ext === '.html')
    );

    rollup.watch(watchOptions).on('event', event => {
        // TODO: improve watch errors i.e. missing component i.e. Search in auth.html
        if (event.code === 'ERROR' || event.code === 'FATAL') {
            console.log(color.red(event.error));
        }
        if (event.code === 'BUNDLE_END') {
            console.log(color.cyan(`[ROLLUP] built ${event.input} in ${event.duration}ms`));
        }
    });

    // TODO: add build here
}