const commonjs = require('rollup-plugin-commonjs');
const resolve = require('rollup-plugin-node-resolve');
const svelte = require('rollup-plugin-svelte');

const imports = `
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import svelte from 'rollup-plugin-svelte';
`;

const moduleDefinition = ({ dirStr, modulePath, name, ext }) => {
    return {
        inputOptions: {
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
            ]
        },
        outputOptions: {
            name,
            file: `${dirStr.replace('output', 'dist')}/${name}.js`,
            format: 'amd'
        }
    }
};

exports.moduleDefinition = moduleDefinition;
exports.rollupTemplate = (paths) => `
${imports}
export default [
    ${paths.map(moduleDefinition).join(',')}
];
`;