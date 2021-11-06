<template>
<div class="container">
  <h2>A Story about Space Trip</h2>
  <form v-if="creating" @submit.prevent="createLib">
    <p>Fill out the following to create a funny story.</p>
    <p>Leave the entry empty to get a random word for that space.</p>
    <WordList :words="words" />
    <button type="submit">Submit</button>
  </form>
  <div v-else class="story">
    <p>
      Space Log {{getValue('number1')}}:
    </p>
    <p>
      My name is {{getValue('name1')}}. I don't remember anything else anymore. I am
      wearing a {{getValue('color1')}} spacesuit and am surrounded by
      {{getValue('noun1')}} that have {{getValue('number2')}} eyes {{getValue('verb1')}}ing
      at me. I am scared that my family, if I had one, are {{getValue('verb2')}}ing or
      {{getValue('verb3')}}ing.
    </p>
    <p>
      The {{getValue('noun2')}}s outside are sparkling like fire. I need to close
      my eyes...
    </p>
    <a @click="newLib" href="#" class="newLib">Create another Lib</a>
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
          name: 'number1',
          display: "A Number",
          value: '',
          type: 'number',
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
          name: 'color1',
          display: "A Color",
          value: '',
          type: 'adjective',
          filter: 'color',
        },
        {
          name: 'noun1',
          display: "A Noun",
          value: '',
          type: 'object',
          filter: '',
        },
        {
          name: 'number2',
          display: "A Number",
          value: '',
          type: 'number',
          filter: '',
        },
        {
          name: 'verb1',
          display: "A Verb (Present-tense)",
          value: '',
          type: 'verb',
          filter: 'present',
        },
        {
          name: 'verb2',
          display: "A Verb (Present-tense)",
          value: '',
          type: 'verb',
          filter: 'present',
        },
        {
          name: 'verb3',
          display: "A Verb (Present-tense)",
          value: '',
          type: 'verb',
          filter: 'present',
        },
        {
          name: 'noun2',
          display: "A Noun",
          value: '',
          type: 'object',
          filter: '',
        },
      ]
    }
  },
  methods: {
    populate(word) {
      if (word.value != ''){
        return
      }
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
