const unzip = module => module.default;
const resolve = path => System.import(path).then(unzip);
const resolveAll = paths => Promise.all(paths.map(resolve))

const modules = [
    './dist/auth/auth.js'
];

resolveAll(modules)
    .then(([Class]) => {
        return new Class({
            target: document.getElementById('app'),
            data: {
                path: './dist/panel/subpanel/subpanel.js',
                text: 'vistex'
            }
        });
    });