import { shallowMount } from '@vue/test-utils'
import movieList from '@/components/movieList.vue'

describe('movieList.vue', () => {
  it('MovieList component renders a list of movie', () => {
    const movies = [
      {
        Title: "Waterworld",
        Year: 1995,
        imdbID: "tt0114898"
      }
    ];

    const wrapper = shallowMount(movieList, {
      propsData: {
        movies: movies
      }
    });
    
    expect(wrapper.props().movies).toEqual(
      expect.arrayContaining([      
        expect.objectContaining(movies[0])
      ])
    );
  })
})
