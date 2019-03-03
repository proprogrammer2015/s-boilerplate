const fs = require('fs');
const color = require('colors');
const { resolvePath } = require('corresponding-path');
const { Html, Js } = require('svelte-module-combine');
const { Sass } = require('./transformations/Sass');
const { rollupTemplate } = require('./rollup.template');

const output = './output';
exports.isSingleRun = false;
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
exports.entrypoints = {
    delete: path => console.log(color.grey(`${path} was removed.`)),
    error: msg => console.log(color.red(`ERROR: ${msg}`)),
    compile: (path, all) => console.log(color.green(`${path} was compiled.`)),
    change: (path, all) => console.log(color.yellow(`${path} was changed.`)),
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
    const rollupConfig = rollupTemplate(
        paths.map(path => resolvePath(path, output))
            .filter(({ ext }) => ext === '.html')
    );
    fs.writeFileSync('rollup.config.js', rollupConfig);
}