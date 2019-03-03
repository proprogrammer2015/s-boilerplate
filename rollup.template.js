
const imports = `
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import svelte from 'rollup-plugin-svelte';
`;

const moduleDefinition = ({ dirStr, modulePath, name, ext }) => `
{
    input: '${dirStr}/${name}${ext}',
    output: {
        name: '${name}',
        file: '${dirStr.replace('output', 'dist')}/${name}.js',
        format: 'amd'
    },
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
}
`;
exports.rollupTemplate = (paths) => `
${imports}
export default [
    ${paths.map(moduleDefinition).join(',')}
];
`;