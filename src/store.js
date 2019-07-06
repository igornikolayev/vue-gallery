import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		films: {
			plot: [],
			name: [],
			img: [],
			rating: [],
		},
		selectIndex: [],
		recoveryIndex: [],
	},
	mutations: {
		generateFilm(state, films) {
			state.films.name.push(films.Title);
			state.films.plot.push(films.Plot);
			state.films.img.push(films.Poster);
			state.films.rating.push(films.imdbRating);
		},
		selectFilm(state, select) {
			state.selectIndex.push(select);
		},
		recoveryFilm(state, index) {
			state.recoveryIndex.push(index)
		}
	}
})
