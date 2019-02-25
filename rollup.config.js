import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import svelte from 'rollup-plugin-svelte';

const paths = {
    auth: 'auth/auth',
    subpanel: 'panel/subpanel/subpanel'
};

export default Object.keys(paths).map(name => {
    const modulePath = paths[name];
    return {
        input: `./output/${modulePath}.html`,
        output: {
            name,
            file: `./dist/${modulePath}.js`,
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
});