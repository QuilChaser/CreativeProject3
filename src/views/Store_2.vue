<template>
<div>
  <h1>A Story about a Shopping Trip</h1>
  <form v-if="creating" @submit.prevent="createLib">
    <p>Fill out the following to create a funny story.</p>
    <p>Leave the entry empty to get a random word for that space.</p>
    <WordList :words="words" />
    <button type="submit">Submit</button>
  </form>
  <div v-else>
    <p>
      One {{getValue("adjective1")}} day, I decided to go to the {{getValue("noun1")}} store.
      I needed to get 3 things while all the store: {{getValue("noun2")}},
      {{getValue("noun3")}}, {{getValue("noun4")}}. While looking for
      {{getValue("noun2")}}, I discovered that my friend {{getValue("name1")}}
      was at the store as well. We talked about that time when we
      {{getValue("pastVerb")}} and decided that we {{getValue("futureVerb")}}
      in the future. I finished shopping and the {{getValue("adjective2")}} cashier,
      {{getValue("name2")}}, made me pay. It was a good trip to the
      {{getValue("noun1")}} store.
    </p>
    <p><a @click="newLib" href="#">Create another Lib</a></p>
  </div>
</div>
</template>

<script>
import WordList from "../components/WordList.vue"
export default {
  name: 'Space',
  components: {
    WordList
  },
  data() {
    return {
      creating: true,
      words: [{
          name: 'adjective1',
          display: "An Adjective",
          value: '',
          type: 'adjective',
          filter: '',
        },
        {
          name: 'noun1',
          display: "A Noun",
          value: '',
          type: 'object',
          filter: '',
        },
        {
          name: 'noun2',
          display: "A Noun",
          value: '',
          type: 'object',
          filter: '',
        },
        {
          name: 'noun3',
          display: "A Noun",
          value: '',
          type: 'object',
          filter: '',
        },
        {
          name: 'noun4',
          display: "A Noun",
          value: '',
          type: 'object',
          filter: '',
        },
        {
          name: 'name1',
          display: "A Name",
          value: '',
          type: 'name',
          filter: '',
        },
        {
          name: 'pastVerb',
          display: "A Verb (Past-tense)",
          value: '',
          type: 'verb',
          filter: 'past',
        },
        {
          name: 'futureVerb',
          display: "A Verb (Future-tense)",
          value: '',
          type: 'verb',
          filter: 'future',
        },
        {
          name: 'adjective2',
          display: "An Adjective",
          value: '',
          type: 'adjective',
          filter: '',
        },
        {
          name: 'name2',
          display: "A Name",
          value: '',
          type: 'name',
          filter: '',
        },
      ]
    }
  },
  methods: {
    populate(word) {
      if (word.type === 'number') {
        word.value = parseInt(Math.random() * 100);
        return
      }
      let availableWords = this.$root.$data.defaultWords[word.type + "s"];
      if (word.filter != '') {
        availableWords = availableWords.filter(n => {
          return n.filter === word.filter;
        });
      }
      let idx = parseInt(Math.random() * 100 % availableWords.length);
      word.value = availableWords[idx].name;
    },
    createLib() {
      this.words.forEach(function(w) {
        if (w.value === '') {
          this.populate(w);
        }
      }.bind(this));
      this.creating = false;
    },
    getValue(name) {
      let words = this.words.filter(n => {
        return n.name === name;
      });
      return words[0].value;
    },
    newLib() {
      this.words.forEach(function(w) {
        w.value = '';
      });
      this.creating = true;
    }
  },

}
</script>
