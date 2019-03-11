export default {
    components: {
        Panel: './../panel/panel.html',
        Search: './../search/search.html',
        AsyncComponent: './../asyncComponent/asyncComponent.html',
        New: './../new/new.html'
    },
    data() {
        return {
            rows: [1]
        }
    },
    oncreate() {
        console.log('AUth creation');
        debugger;
    },
    methods: {
        updateText() {
            this.refs.ac.update({ text: 'Jacek Placek' });
        },
        setText() {
            this.set({ text: 'Set text works!' });
        },
        generate(length) {
            this.set({ rows: Array.from({ length }, (v, k) => ++k) });
        }
    }
}