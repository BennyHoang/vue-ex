<template>
  <div>
      <p>{{msg}}</p>
      <PokemonList></PokemonList>
  </div>
</template>
<script>
import PokemonList from './PokemonList.vue'
export default {
  name: 'Pokemon',
  data () {
    return {
      msg: 'hello from pokemon'
    }
  },
  components: {'PokemonList': PokemonList}
}
</script>
