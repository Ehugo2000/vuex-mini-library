<template>
  <div id='reading-list'>
    <ul>
      <li v-for="book in addedBooks" :key="book.Id">
        {{book.Title}}
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'ReadingList',
  computed: {
    addedBooks(){
      return this.$store.state.readingList
    }
  },
}
</script>

<style>

</style>