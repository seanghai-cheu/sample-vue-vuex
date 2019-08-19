import Vue from 'vue'
import Vuex from 'vuex'

// company store
import * as companyStore from './store/companyStore'

Vue.use(Vuex)

/**
 * export store (centralize data)
 */
export default new Vuex.Store({
	/**
	 * state
	 */
	state: {

	},

	/**
	 * getter
	 */
	getters: {

	},

	/**
	 * mutation
	 */
	mutations: {

	},

	/**
	 * action
	 */
	actions: {

	},

	/**
	 * module
	 */
	modules: {
		company: companyStore
	}
})
