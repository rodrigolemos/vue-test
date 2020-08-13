<template>
  <div class="hello">
    <custom-header>Sorteio Intergrall</custom-header>
    <div v-if="!raffle.length">
      <custom-form-group>
        <label>
          Sortear <custom-input v-model="qtd" />
          número(s) entre <custom-input v-model="min" />
          e <custom-input v-model="max"/>
        </label>
        <custom-button @click="create">Sortear</custom-button>
      </custom-form-group>
    </div>

    <div v-else>
      <custom-form-group>
        <custom-list>
          <li v-for="drawn in raffle" :key="drawn">{{ drawn }}</li>
        </custom-list>
        <custom-button @click="clear">Novo Sorteio</custom-button>
      </custom-form-group>
    </div>

  </div>
</template>

<script>
import { CustomHeader } from '../styled-components/Header'
import { CustomFormGroup, CustomInput, CustomButton, CustomList } from '../styled-components/Form'

export default {
  name: 'Main',
  components: {
    CustomHeader,
    CustomFormGroup,
    CustomInput,
    CustomButton,
    CustomList
  },
  data: function() {
    return {
      qtd: 1,
      min: 1,
      max: 10,
      raffle: []
    }
  },
  methods: {
    create() {
      for (let index = 0; index < this.qtd; index++) {

        let newDrawn = this.getRandomInt(this.min, this.max);
        
        if (this.raffle.includes(newDrawn)) {
          // this.clear();
          this.create();
        } else {
          this.raffle.push( newDrawn );
        }

      }
    },
    clear() {
      this.raffle = [];
    },
    getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');
</style>
