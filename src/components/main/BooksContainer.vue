<script>
import SingleBook from "./SingleBook.vue";

export default {
  name: "BooksContainer",

  components: {
    SingleBook,
  },

  props: {
    books: Array,
  },
};
</script>

<template>
  <div class="my_books-container container p-5">
    <div class="row justify-content-center">
      <SingleBook class="col-2 mb-5 mx-3" v-for="book in books" :book="book" />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
