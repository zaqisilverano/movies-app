<template>
  <div class="favourites">
    <!-- Favourites movies list -->
    <div class="movies-wrapper" v-if="favourites.length">
      <movieCard v-for="item in favourites" :key="item.imdbID" :movie="item"  />
    </div>

    <div class="empty-movies" v-else>
      <font-awesome-icon icon="file-video" :style="{ color: '#cccccc' }" size="6x" />
      <p>You have not selected favourites movies yet.</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { useGetters } from 'vuex-composition-helpers'
import movieCard from '@/components/movieCard.vue'

export default defineComponent({
  components: {
    movieCard
  },
  setup() {
    const { favourites } = useGetters<any>(['favourites']);

    return {
      favourites
    }
  }
})
</script>

<style scoped lang="scss">
.favourites {
  padding: 80px 30px 20px;
}

.empty-movies {
  margin-top: 100px;
  text-align: center;

  p {
    margin-top: 15px;
    font-size: 20px;
  }
}
</style>