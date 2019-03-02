const color = require('colors');
const { Html, Js } = require('svelte-module-combine');
const { Sass } = require('./transformations/Sass');

exports.patterns = [
    './src/**'
];
exports.output = './output';
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
    add: (path, all) => console.log(color.green(`${path} was added.`)),
    ready: (_, all) => console.table(color.rainbow(`[SVELTE MODULE COMBINE]`))
}