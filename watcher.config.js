const { Html, Js } = require('svelte-module-combine/lib/index');
const { Sass } = require('./transformations/Sass');

exports.patterns = [
    './src/**'
];
exports.output = './output';
exports.processors = [
    new Html(),
    new Js(),
    new Sass()
];