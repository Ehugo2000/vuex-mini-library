<template>
  <div id="library">
    <h1>library-view</h1>
    <div class="books-container">
    <article v-for="book in bookList" :key="book.Id" @click="bookView(book.Id)">
      <p>{{book.Title}}
      </p>
      <p>{{book.Author}}</p>
    </article>
    </div>
  </div>
</template>

<script>
export default {
  name: 'library',
  methods: {
    bookView(id){
      this.$router.push({path: `/SingleBook/${id}`})
      console.log(`bookview clicked! id: ${id}`);
    }
  },
  computed: {
    bookList(){
      return this.$store.state.books
    }
  }

}
</script>

<style scoped>

article {
  display: flex;
  align-items: flex-end;
  text-align: left;
  border: 2px solid black;
  list-style: none;
  height: 300px;
  width: 200px;
  background: peachpuff;
  margin: 1rem;
  padding-left: 1rem;
  padding-bottom: 0.5rem;
}

.books-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

</style>