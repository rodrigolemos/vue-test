<template>
  <div class="main">
    
    <custom-disclaimer>
      <span>Versão mobile em desenvolvimento ;)</span>
    </custom-disclaimer>
    
    <custom-header>Sorteio Simples</custom-header>

    <custom-div>

      <custom-group v-if="!winners.length">
        <label>
          Sortear <custom-input v-model="qtd" />
          número(s) entre <custom-input v-model="min" />
          e <custom-input v-model="max" />
        </label>
        <custom-button @click="create">Sortear</custom-button>
      </custom-group>

      <custom-group v-else>
        <label>Parabéns aos vencedores!</label>
        <custom-list>
          <li v-for="drawn in winners" :key="drawn">{{ drawn }}</li>
        </custom-list>
        <custom-button @click="clear">Novo Sorteio</custom-button>
      </custom-group>

    </custom-div>

  </div>
</template>

<script>
import { CustomHeader } from '../styled-components/Header'
import {
  CustomDiv,
  CustomGroup,
  CustomInput,
  CustomButton,
  CustomList,
  CustomDisclaimer
} from '../styled-components/Form'

export default {
  name: 'Main',
  components: {
    CustomHeader,
    CustomDiv,
    CustomGroup,
    CustomInput,
    CustomButton,
    CustomList,
    CustomDisclaimer,
  },
  data: function() {
    return {
      qtd: 1,
      min: 1,
      max: 10,
      winners: []
    }
  },
  methods: {
    create() {
      for (let index = 0; index < this.qtd; index++) {

        let newWinner = this.getRandomInt(this.min, this.max);

        if (this.winners.includes(newWinner)) {
          newWinner = this.getRandomInt(this.min, this.max);
        }

        this.winners.push(newWinner);

      }
    },
    clear() {
      this.winners = [];
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
  .main {
    display: flex;
    flex-direction: column;
  }
</style>
