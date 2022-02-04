<template>
  <div id="single-book">
    <router-link to="/">Back-Link</router-link>
    <h1>SingleBook-view</h1>
    <div id="book">
      <article>
        <h5>
          {{ book.Title }}
        </h5>
        <p>
          {{ book.Author }}
        </p>
      </article>
    </div>
      <button
      @click="addToReadingList"
      >Click here to Add to ReadList</button>
  </div>
  
</template>

<script>
export default {
  name: 'SingleBook',
  computed: {
    book() {
      return this.$store.state.books.find(
        (book) => book.Id === Number(this.$route.params.id)
      );
    },
    showBook(){
      return this.$store.state.readingList
    }
  },
  methods: {
    addToReadingList(){
      this.$store.commit('addToReadingList', this.book)
    }
  }
};
</script>

<style>
#book {
  background: #1b1b1b;
  max-width: 500px;
  height: 50vh;
  display: flex;
  flex-direction: column;
  color: #cccccc;
}
</style>
