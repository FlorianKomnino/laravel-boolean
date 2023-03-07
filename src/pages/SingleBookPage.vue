<template lang="">
    <div>
        <SingleBook v-if="book" :book="book" :isShow="true"/>
    </div>
</template>

<script>
import SingleBook from '../components/main/SingleBook.vue'
import axios from 'axios'

export default {

    name: 'SingleBookPage',
    components: {
        SingleBook
    },
    data() {
        return {
            book: null,
            loading: false,
            urlAddress: 'http://127.0.0.1:8000',
        }
    },
    methods: {
        getBook(){
            axios.get(this.urlAddress + `/api/books/${this.$route.params.id}`, {
                params: {
                }
            })
            .then((response) => {
                this.book = response.data.results;
                console.warn(response);
            })
            .catch(function (error) {
                console.warn(error);
            });
        },
    },
    created() {
        this.getBook();
    },
}
</script>
<style lang="scss">
</style>