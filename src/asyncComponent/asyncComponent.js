// TODO: Move unzip function to separate service
const unzip = module => module.default;

// TODO: get rid of .html ext whilte loading component as reference

export default {
    components: {
        Fragment: './fragment.html'
    },
    computed: {
        component(state) {
            const path = state.path;
            return System.import(path).then(unzip)
            .then(module => [
                module,
                state
            ])
            // TODO: Remove the timeout
                .then(module => {
                    return new Promise((res, rej) => {
                        setTimeout(() => {
                            res(module);
                        }, 1000);
                    });
                });
        }
    },
    methods: {
        update(state) {
            const component = this.refs.innerComponent;
            if (component) {
                component.set(state);
            } else {
                // TODO: record this action
            }
        }
    }
}