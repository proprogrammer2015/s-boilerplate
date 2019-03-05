const fs = require('fs');
const color = require('colors');
const { resolvePath } = require('corresponding-path');
const { Html, Js } = require('svelte-module-combine');
const { Sass } = require('./transformations/Sass');
const { rollupTemplate } = require('./rollup.template');
const rollup = require('rollup');

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
        if (event.code === 'ERROR') {
            console.log(color.red(event));
        }
        if (event.code === 'BUNDLE_END') {
            console.log(color.cyan(`[ROLLUP] built ${event.input} in ${event.duration}ms`));
        }
    });
}