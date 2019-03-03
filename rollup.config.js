

import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import svelte from 'rollup-plugin-svelte';

export default [
    
{
    input: './output/asyncComponent/asyncComponent.html',
    output: {
        name: 'asyncComponent',
        file: './dist/asyncComponent/asyncComponent.js',
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
,
{
    input: './output/auth/auth.html',
    output: {
        name: 'auth',
        file: './dist/auth/auth.js',
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
,
{
    input: './output/panel/fancy-panel.html',
    output: {
        name: 'fancy-panel',
        file: './dist/panel/fancy-panel.js',
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
,
{
    input: './output/panel/panel.html',
    output: {
        name: 'panel',
        file: './dist/panel/panel.js',
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
,
{
    input: './output/panel/subpanel/subpanel.html',
    output: {
        name: 'subpanel',
        file: './dist/panel/subpanel/subpanel.js',
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
,
{
    input: './output/search/search.html',
    output: {
        name: 'search',
        file: './dist/search/search.js',
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

];
