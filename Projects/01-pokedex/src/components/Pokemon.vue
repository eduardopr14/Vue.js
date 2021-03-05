<template>
    <div id="pokemon">
        <div class="card pokemon-card-div">
            <div class="card-image">
                <figure class="pokemon-figure">
                    <img class="pokemon-image" :src="currentImg" alt="Placeholder image">
                </figure>
            </div>
            <div class="card-content">
                <div class="media">
                    <div class="media-content">
                        <p class="title is-4">{{ index }} - {{ name | upper }}</p>
                        <p class="subtitle is-6">{{ pokemon.type | upper }}</p>
                        <p class="subtitle is-6">
                            {{ pokemon.hp }}, 
                            {{ pokemon.attack }}, 
                            {{ pokemon.defense }}, 
                            {{ pokemon.speciala }}, 
                            {{ pokemon.speciald }}, 
                            {{ pokemon.speed }}
                        </p>
                    </div>
                </div>

                <div class="content">
                    <button class="button is-small is-fullwidth" @click="changeSprite">Shiny</button>
                </div>
                <div>
                    <pokemon-detail></pokemon-detail>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import PokemonDetail from './PokemonDetail.vue';

export default {
    components: {
        PokemonDetail
    },

    created: function() {
        axios.get(this.url).then(res => {
            this.pokemon.type = res.data.types[0].type.name;
            this.pokemon.front = res.data.sprites.front_default;
            this.pokemon.shiny = res.data.sprites.front_shiny;

            this.pokemon.hp = res.data.stats[0].base_stat;
            this.pokemon.attack = res.data.stats[1].base_stat;
            this.pokemon.defense = res.data.stats[2].base_stat;
            this.pokemon.speciala = res.data.stats[3].base_stat;
            this.pokemon.speciald = res.data.stats[4].base_stat;
            this.pokemon.speed = res.data.stats[5].base_stat;

            this.currentImg = this.pokemon.front;
        })
    },
    data() {
        return {
            isNormal: true,
            currentImg: '',
            pokemon: {
                type: '',
                front: '',
                shiny: '',
                hp: ''
            },
        }
    },
    props: {
        index: Number,
        name: String,
        url: String
    },
    filters: {
        upper: function(value) {
            var newName = value[0].toUpperCase() + value.slice(1);
            return newName;
        }
    },
    methods: {
        changeSprite: function() {
            if(this.isNormal) {
                this.isNormal = false;
                this.currentImg = this.pokemon.shiny;
            } else {
                this.isNormal = true;
                this.currentImg = this.pokemon.front;
            }
        }
    }
}
</script>

<style>

#pokemon {
    margin-top: 1%;
    margin-left: 0.5%;
    margin-right: 0.5%;
    width: 32.2%;
    float: left;
}

.pokemon-card-div {
    height: 300px;
    overflow: hidden;
    background-color: #e18876 !important;
}

.pokemon-figure {
    margin: 20px auto;
    background-color: #e18876;
    border-radius: 50%;
    max-width: 120px;
    height: 120px;
}

.pokemon-image {
    margin-top: 13px;
}

</style>