import Vue from 'vue'
import Vuex from 'vuex'
import { GetterTree, MutationTree, ActionTree, ActionContext } from "vuex"
Vue.use(Vuex)

type Movie = {
    Title: string;
    Year: number;
    imdbID: string;
 }

class State {
    favourites = [];
}

const getters: GetterTree<State, State> = {
    favourites: state => state.favourites,
    getFavStat: state => (id: string) => {
        const isExist = state.favourites.filter((item: Movie) => item.imdbID === id);
        return isExist.length ? true : false;
    }
};

const mutations: MutationTree<State> = {
    setFavourites(state: State, payload) {
        state.favourites = payload;
    }
};

const actions: ActionTree<State, State> = {
    setFavourites(store: ActionContext<State, any>, movie: Movie) {
        // Mark as favourites action
        const favourites = [...store.state.favourites];
        const isExist = favourites.filter((item: Movie) => item.imdbID === movie.imdbID);

        if (isExist.length) {
            const newFav = favourites.filter((item: Movie) => item.imdbID !== movie.imdbID);
            store.commit('setFavourites', newFav);
        } else {
            const newFav = [...favourites, movie];
            store.commit('setFavourites', newFav);
        }
    }
};

const store = new Vuex.Store({
    state: new State(),
    getters: getters,
    mutations: mutations,
    actions: actions
})

export default store