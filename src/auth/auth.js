export default {
    components: {
        Panel: './../panel/panel.html',
        Search: './../search/search.html',
        AsyncComponent: './../asyncComponent/asyncComponent.html'
    },
    methods: {
        changeText() {
            this.refs.ac.update({ text: 'Jacek Placek' });
        }
    }
}