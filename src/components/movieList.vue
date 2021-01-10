<template>
  <div>
    <movieCard v-for="item in movieList" :key="item.imdbID" :movie="item"  />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent  } from '@vue/composition-api'
import movieCard from '@/components/movieCard.vue'

export default defineComponent({
  components: {
    movieCard
  },
  props: {
    movies: {
      type: Array
    }
  },
  setup(props) {
    const movieList = computed(() => props.movies);

    return {
      movieList
    }
  }
})
</script>
