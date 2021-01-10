<template>
  <div class="movies">
    <!-- Search and pagination -->
    <div class="filters">
      <div class="search">
        <form @submit="getMovies(true)">
          <input class="search-input" placeholder="Search Movies" v-model="movieTitle" />
          <font-awesome-icon icon="search" :style="{ color: '#cccccc' }" />
        </form>
      </div>

      <v-pagination
        v-model="page"
        :length="totalPage"
        :total-visible="7"
        color="#FE7A21"
      />
    </div>

    <!-- Movies list -->
    <div class="movies-wrapper" v-if="movies.length">
      <movieList :movies="movies" />
    </div>

    <div class="empty-movies" v-else>
      <font-awesome-icon icon="file-video" :style="{ color: '#cccccc' }" size="6x" />
      <p>No movies found.</p>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted, watch } from '@vue/composition-api'
import { getMoviesAPI } from '@/api/movies.ts'
import movieList from '@/components/movieList.vue'

export default defineComponent({
  components: {
    movieList
  },
  setup() {
    const movies = ref([]);
    const movieTitle = ref("");
    const page = ref(1);
    const totalPage = ref(1);

    async function getMovies(search = false) {
      // Getting movies from API
      if (search) page.value = 1;
      const apiCalls: any = await getMoviesAPI({ Title: movieTitle.value, page: page.value });

      // Assign the response
      movies.value = apiCalls.data;
      totalPage.value = apiCalls.total_pages;
    }

    onMounted(() => {
      if (!movies.value.length) getMovies()
    })

    watch(page, (page, prevPage) => {
      if (page !== prevPage) getMovies()
    })

    return {
      movies,
      movieTitle,
      page,
      totalPage,
      getMovies
    }
  }
})
</script>

<style scoped lang="scss">
.movies {
  padding: 50px 30px 20px;
}

.filters {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 45px;
  margin: 25px 0;

  .search {
    width: 300px;
    position: relative;

    &-input {
      background: white;
      box-shadow: 0 1px 5px 0 rgba(0,0,0,.12);
      border-radius: 4px;
      padding: 8px 10px;
      width: 100%;
    }

    .fa-search {
      position: absolute;
      top: 10px;
      right: 10px;
      z-index: 9;
      pointer-events: none;
    }
  }
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