<template>
<div>
  <h1>A Story about a Shopping Trip</h1>
  <form v-if="creating" @submit.prevent="createLib">
    <p>Fill out the following to create a funny story.</p>
    <p>Leave the entry empty to get a random word for that space.</p>
    <p>An Adjective</p><input v-model="adjective1">
    <p>A Noun</p><input v-model="noun1"><br />
    <p>A Noun</p><input v-model="noun2"><br />
    <p>A Noun</p><input v-model="noun3"><br />
    <p>A Noun</p><input v-model="noun4"><br />
    <p>A Name</p><input v-model="name1"><br />
    <p>A Past-tense Verb</p><input v-model="pastVerb"><br />
    <p>A Future-tense Verb</p><input v-model="futureVerb"><br />
    <p>An Adjective</p><input v-model="adjective2"><br />
    <p>A Name</p><input v-model="name2"><br />
    <br />
    <button type="submit">Submit</button>
  </form>
  <div v-else>
    <p>
      One {{adjective1}} day, I decided to go to the {{noun1}} store.
      I needed to get 3 things while all the store: {{noun2}}, {{noun3}}, and {{noun4}}.
      While looking for {{noun2}}, I discovered that my friend {{name1}} was at the store as well.
      We talked about that time when we {{pastVerb}} and decided that we
      {{futureVerb}} in the future. I finished shopping and the {{adjective2}}
      cashier, {{name2}}, made me pay. It was a good trip to the {{noun1}} store.
    </p>
    <p><a @click="newLib" href="#">Create another Lib</a></p>
  </div>
</div>
</template>

<script>
export default {
  name: 'create',
  data() {
    return {
      creating: true,
      adjective1: '',
      noun1: '',
      noun2: '',
      noun3: '',
      noun4: '',
      name1: '',
      pastVerb: '',
      futureVerb: '',
      adjective2: '',
      name2: '',
    }
  },
  methods: {
    newLib() {
      this.creating = !this.creating;
      this.adjective1 = '';
      this.noun1 = '';
      this.noun2 = '';
      this.noun3 = '';
      this.noun4 = '';
      this.name1 = '';
      this.pastVerb = '';
      this.futureVerb = '';
      this.adjective2 = '';
      this.name2 = '';
    },
    noun() {
      let nouns = this.$root.$data.defaultWords.objects;
      let index = parseInt(Math.random() * 100 % nouns.length);
      return nouns[index].name;
    },
    name() {
      let names = this.$root.$data.defaultWords.names;
      let index = parseInt(Math.random() * 100 % names.length);
      return names[index].name;
    },
    adjective() {
      let adjectives = this.$root.$data.defaultWords.adjectives;
      let index = parseInt(Math.random() * 100 % adjectives.length);
      return adjectives[index].name;
    },
    verb(tense) {
      let verbs = this.$root.$data.defaultWords.verbs;
      verbs = verbs.filter(n => {
        return n.tense === tense;
      });
      let index = parseInt(Math.random() * 100 % verbs.length);
      return verbs[index].name;
    },
    adverb() {
      let adverbs = this.$root.$data.defaultWords.adverbs;
      let index = parseInt(Math.random() * 100 % adverbs.length);
      return adverbs[index].name;
    },
    createLib() {
      if (this.adjective1 === '') {
        this.adjective1 = this.adjective();
      };
      if (this.adjective2 === '') {
        this.adjective2 = this.adjective();
      };
      if (this.noun1 === '') {
        this.noun1 = this.noun();
      };
      if (this.noun2 === '') {
        this.noun2 = this.noun();
      };
      if (this.noun3 === '') {
        this.noun3 = this.noun();
      };
      if (this.noun4 === '') {
        this.noun4 = this.noun();
      };
      if (this.name1 === '') {
        this.name1 = this.name();
      };
      if (this.name2 === '') {
        this.name2 = this.name();
      };
      if (this.pastVerb === '') {
        this.pastVerb = this.verb('past');
      };
      if (this.futureVerb === '') {
        this.futureVerb = this.verb('future');
      };
      this.creating = false;
    },
  }
}
</script>

<style scoped>
input {
  font-size: 1.2em;
  height: 30px;
  width: 200px;
}

textarea {
  font-size: 1.6em;
  width: 100%;
  max-width: 500px;
  height: 100px;
}

button {
  margin-top: 20px;
  font-size: 1.2em;
}
</style>
