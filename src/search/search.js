export default {
    computed: {
        color: ({ searchText }) => searchText === 'a' ? 'color:red;' : ''
    }
}