<template lang="">
    <div class=container>
        <div class="row justify-content-around align-items-center">
            <div class="col-8">
                <h2 class="my-5">Books:</h2>
            </div>
            <div class="col-3">
                <button @click="this.previousPage" class="btn btn-primary me-3">previous page</button>
                <button @click="this.nextPage" class="btn btn-primary">next page</button>
            </div>
            <BooksContainer :books="books"/>
        </div>
    </div>
</template>
<script>
import BooksContainer from '../components/main/BooksContainer.vue';
import axios from 'axios';
export default {
    name: 'BooksList',
    components:{
        BooksContainer
    },
    data(){
        return{
            books: [],
            currentPage: 1,
            urlAddress: 'http://127.0.0.1:8000'
        }
    },
    methods: {
        getBooks(){
            axios.get(this.urlAddress + '/api/books/', {
                params: {
                    page: this.currentPage
                }
            })
            .then((response) => {
                this.books = response.data.results.data;
            })
            .catch(function (error) {
                console.warn(error);
            });
        },
        nextPage(){
            if (this.currentPage == this.lastPage) {
                this.currentPage = 1
            } else{
                this.currentPage+=1
            }
            this.getBooks()
        },
        previousPage(){
            if (this.currentPage == 1) {
                this.currentPage = this.lastPage
            } else{
                this.currentPage-=1
            }
            this.getBooks()
        }
    },
    created() {
        this.getBooks();
    },
}
</script>
<style lang="scss">
</style>