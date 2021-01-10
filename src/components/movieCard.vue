<template>
  <div class="movie-card">
    <font-awesome-icon
      icon="file-video"
      :style="{ color: '#cccccc' }"
      size="3x" 
    />

    <div class="movie-card-content">
      <h3 class="title">{{ title }}</h3>
      <p class="year">{{ year }}</p>
    </div>
  
    <span class="id">{{ imdbID }}</span>

    <!-- Favourites action -->
    <font-awesome-icon
      :icon="[getFavStat(imdbID) ? 'fas' : 'far', 'star']"
      :style="{ color: getFavStat(imdbID) ? '#FE7A21' : '#cccccc' }"
      class="fav"
      size="lg"
      @click="setFavourites(movie)"
    />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from '@vue/composition-api'
import { useGetters, useActions } from 'vuex-composition-helpers'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar } from '@fortawesome/free-solid-svg-icons'
library.add( faStar)

type moviesCardInterface = {
  Title: string;
  Year: number;
  imdbID: string;
}

type moviesProps = {
  movie: moviesCardInterface;
}

export default defineComponent({
  props: {
    movie: {
      type: Object,
      required: true
    }
  },
  setup(props: moviesProps) {
    // Get action getters from vuex
    const { setFavourites } = useActions<any>(['setFavourites']);
    const { getFavStat } = useGetters<any>(['getFavStat']);
  
    // Movies properties
    const title = computed(() => props.movie.Title);
    const year = computed(() => props.movie.Year);
    const imdbID = computed(() => props.movie.imdbID);

    return {
      title,
      year,
      imdbID,
      setFavourites,
      getFavStat
    }
  }
})
</script>

<style scoped lang="scss">
.movie-card {
  background-color: white;
  padding: 14px;
  border-radius: 5px;
  margin-bottom: 15px;
  text-align: left;
  box-shadow: 0 2px 5px 0 rgba(0,0,0,.1);
  position: relative;

  .fa-file-video {
    float: left;
    margin-right: 15px;
  }

  .title, .year {
    margin-top: 0;
    margin-bottom: 5px;
    line-height: 1.3;
  }

  .year {
    margin-bottom: 0;
  }

  .id {
    background: #aaaaaa;
    color: white;
    padding: 2px 4px;
    border-radius: 3px;
    position: absolute;
    top: 14px;
    right: 14px;
    font-size: 12px;
  }
  
  .fav {
    position: absolute;
    bottom: 12px;
    right: 14px;
    cursor: pointer;
  }
}
</style>
