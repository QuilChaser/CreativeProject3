<template>
<div class="container">
  <h2>A Mystery Store</h2>
  <form v-if="creating" @submit.prevent="createLib">
    <p>Fill out the following to create a funny story.</p>
    <p>Leave the entry empty to get a random word for that space.</p>
    <WordList :words="words" />
    <button type="submit">Submit</button>
  </form>
  <div v-else class="story">
    <p>
      I am {{getValue("adjective1")}}.
    </p>
    <p>
      I open my {{getValue("bodyPart")}} and {{getValue("verb1")}} something.
      That something is {{getValue("adjective2")}} and I can't figure out why.
      Suddenly, I hear a {{getValue("adjective3")}} {{getValue("noun")}} and
      start {{getValue("adverb1")}} {{getValue("verb2")}}ing. I turn around.
      I can't believe my {{getValue("bodyPart")}}.
    </p>
    <p>
      It is my Birthday!!! All of my friends and family are here, including
      {{getValue("name1")}} and my favorite person {{getValue("name2")}}.
      I guess being {{getValue("adjective1")}} doesn't always mean something
      is going to be {{getValue("adjective4")}}.
    </p>
    <a @click="newLib" href="#" class="newLib">Create another Lib</a>
  </div>
</div>
</template>

<script>
import WordList from "../components/WordList.vue"
export default {
  name: 'Mystery',
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
          name: 'bodyPart',
          display: "A Body Part",
          value: '',
          type: 'object',
          filter: 'bodypart',
        },
        {
          name: 'verb1',
          display: "A Verb (Present-tense)",
          value: '',
          type: 'verb',
          filter: 'present',
        },
        {
          name: 'adjective2',
          display: "An Adjective",
          value: '',
          type: 'adjective',
          filter: '',
        },
        {
          name: 'adjective3',
          display: "An Adjective",
          value: '',
          type: 'adjective',
          filter: '',
        },
        {
          name: 'noun',
          display: "A Noun",
          value: '',
          type: 'object',
          filter: '',
        },
        {
          name: 'adverb1',
          display: "An Adverb",
          value: '',
          type: 'adverb',
          filter: '',
        },
        {
          name: 'verb2',
          display: "A Verb (Present-tense)",
          value: '',
          type: 'verb',
          filter: 'present',
        },
        {
          name: 'name1',
          display: "A Name",
          value: '',
          type: 'name',
          filter: '',
        },
        {
          name: 'name2',
          display: "A Name",
          value: '',
          type: 'name',
          filter: '',
        },
        {
          name: 'adjective4',
          display: "An Adjective",
          value: '',
          type: 'adjective',
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
