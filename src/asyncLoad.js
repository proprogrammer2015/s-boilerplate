const unzip = module => module.default;
const resolve = path => System.import(path).then(unzip);
const resolveAll = paths => Promise.all(paths.map(resolve));

export {
    resolveAll,
    resolve
}