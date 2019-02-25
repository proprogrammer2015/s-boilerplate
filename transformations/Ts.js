const { BaseTransformation } = require('svelte-module-combine/lib/index');

class Ts extends BaseTransformation {
    constructor(ext = 'ts', isRequired = false) {
        super(ext, isRequired);
    }

    transform(content) {
        return '';
    }

}

exports.Ts = Ts;