<template>
  <div id="app">
    <input class="input is-rounded is-small input-search" type="text" placeholder="Search" v-model="search" />
    <div class="column">
      <div v-for="(pokemon, index) in searchResult" :key="index">
        <pokemon :index="index + 1" :name="pokemon.name" :url="pokemon.url"></pokemon>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Pokemon from './components/Pokemon';

export default {
  name: 'App',

  components: {
    Pokemon,
  },

  data() {
    return {
      pokemons: [],
      search: ''
    }
  },
  created: function() {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0").then(res => {
      this.pokemons = res.data.results; // Inserindo os dados dentro de um array
    })
  },
  computed: {
    searchResult: function() {
      if(this.search == '' || this.search == ' ') {
        return this.pokemons;
      } else {
        return this.pokemons.filter(pokemon => pokemon.name == this.search);
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.input-search {
  width: 31% !important;
}

/* Big */
@media all and (min-width: 1200px) {
  #app {
    margin: 60px 20%;
  }
}
/* Small */
@media all and (max-width: 1200px) {
  #app {
    margin: 60px 10%;
  }
}

</style>
