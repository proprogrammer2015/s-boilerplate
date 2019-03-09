const commonjs = require('rollup-plugin-commonjs');
const resolve = require('rollup-plugin-node-resolve');
const svelte = require('rollup-plugin-svelte');
const minify = require('rollup-plugin-babel-minify');

const moduleDefinition = (paths) => {
    return {
        input: paths.reduce((initial, { input, output }, index) => {
            initial[output] = input;
            return initial;
        }, {}),
        plugins: [
            resolve({
                jsnext: true,
                main: true
            }),
            commonjs({}),
            svelte({
                emitCss: false
            })
            // minify()
        ],
        onwarn: ({ message }) => console.error('WARN:', message),
        output: {
            dir: 'prod',
            entryFileNames: '[name].js',
            // name,
            // file: `${output}`,
            format: 'amd'
        }
    }
};

exports.rollupTemplate = (paths) => moduleDefinition(paths);