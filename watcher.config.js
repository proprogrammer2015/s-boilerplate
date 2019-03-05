const fs = require('fs');
const color = require('colors');
const { resolvePath } = require('corresponding-path');
const { Html, Js } = require('svelte-module-combine');
const { Sass } = require('./transformations/Sass');
const { moduleDefinition } = require('./rollup.template');
const rollup = require('rollup');

const output = './output';
exports.watch = false;
exports.patterns = [
    './src/**'
];
// exports.filename = '[name]-compiled'
exports.output = output;
exports.outputExtension = 'html';
exports.processors = [
    new Html(),
    new Js(),
    new Sass()
];

// TODO: add all watched files in delete as 2nd param
exports.entrypoints = {
    delete: path => console.log(color.grey(`${path} was removed.`)),
    error: msg => console.log(color.red(`ERROR: ${msg}`)),
    compile: (path, all) => console.log(color.green(`${path} was compiled.`)),
    change: (path, all) => {
        generateRollupConfig(all);
        console.log(color.yellow(`${path} was changed.`))
    },
    add: (path, all) => {
        generateRollupConfig(all);
        console.log(color.green(`${path} was added.`));
    },
    ready: (_, all) => {
        generateRollupConfig(all);
        console.table(color.rainbow(`[SVELTE MODULE COMBINE]`))
    }
}

const generateRollupConfig = paths => {
    paths.map(path => resolvePath(path, output))
        .filter(({ ext }) => ext === '.html')
        .map(moduleDefinition)
        .forEach(({ inputOptions, outputOptions }) => {
            rollup.rollup(inputOptions).then(bundle => bundle.write(outputOptions))
        });
}