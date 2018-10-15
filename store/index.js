import Vue from 'vue'
import Vuex from 'vuex'
import { RemoteInstance } from 'directus-sdk-javascript'

Vue.use(Vuex, RemoteInstance)

// get data
export const client = new RemoteInstance({
    url: 'http://u2859.green.elastictech.org/',
    version: '1.1',
    accessToken: []
})


const store = () => new Vuex.Store({

  state: {
    noScroll: false,
    showNav: false,
    contacts: [],
    projects: [],
    sohobook: [],
    team: []
  },
  mutations: {
    toggleNav (state) {
      state.showNav = !state.showNav,
      state.noScroll = !state.noScroll
    },
    setContacts (state, contacts) {
      state.contacts = contacts
    },
    setProjects (state, projects) {
      state.projects = projects
    },
    setSohobook (state, sohobook) {
      state.sohobook = sohobook
    },
    setTeam (state, team) {
      state.team = team
    }
  },
  getters: {
    showNav: state => {
      return state.showNav
    }
  },
  actions: {
    // TODO: replace with fetch
    async getContacts({commit}) {
      const res = await client.getItems('kontacts')
      commit('setContacts', res.data)
    },
    async getProjects({commit}) {
      const res = await client.getItems('projects')
      commit('setProjects', res.data)
    },
  }
  
})

export default store