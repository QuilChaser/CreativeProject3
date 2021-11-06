<template>
<div class="wrapper container">
  <div class="words row">
    <div class="word col-lg-4" v-for="word in words" :key="word.id">
      <p>{{word.display}}</p>
      <input v-model="word.value"><br />
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'WordList',
  props: {
    words: Array
  },
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.word {
  padding: .5rem;
}
</style>
