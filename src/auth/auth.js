export default {
    components: {
        Panel: './../panel/panel.html',
        Search: './../search/search.html',
        AsyncComponent: './../asyncComponent/asyncComponent.html'
    },
    data() {
        return {
            rows: [1]
        }
    },
    methods: {
        changeText() {
            this.refs.ac.update({ text: 'Jacek Placek' });
        },
        generate(length) {
            this.set({ rows: Array.from({ length }, (v, k) => ++k) });
        }
    }
}