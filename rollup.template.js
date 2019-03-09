const commonjs = require('rollup-plugin-commonjs');
const resolve = require('rollup-plugin-node-resolve');
const svelte = require('rollup-plugin-svelte');
const minify = require('rollup-plugin-babel-minify');

const moduleDefinition = ({ input, output, name }) => {
    return {
        input: `${input}`,
        plugins: [
            resolve({
                jsnext: true,
                main: true
            }),
            commonjs({}),
            svelte({
                emitCss: false
            }),
            minify()
        ],
        onwarn: ({ message }) => console.error('WARN:', message),
        output: {
            name,
            file: `${output}`,
            format: 'amd'
        }
    }
};

exports.rollupTemplate = (paths) => paths.map(moduleDefinition);