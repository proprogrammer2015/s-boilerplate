const commonjs = require('rollup-plugin-commonjs');
const resolve = require('rollup-plugin-node-resolve');
const svelte = require('rollup-plugin-svelte');

const moduleDefinition = ({ dirStr, modulePath, name, ext }) => {
    return {
        input: `${dirStr}/${name}${ext}`,
        plugins: [
            resolve({
                jsnext: true,
                main: true
            }),
            commonjs({}),
            svelte({
                emitCss: false
            })
        ],
        output: {
            name,
            file: `${dirStr.replace('output', 'dist')}/${name}.js`,
            format: 'amd'
        }
    }
};

exports.rollupTemplate = (paths) => paths.map(moduleDefinition);