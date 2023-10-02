export default {
  actions: {
    async fetchPost(ctx) {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3')
      const posts = await res.json()
      ctx.commit('updatePosts', posts)
    }
  },
  mutations: {
    updatePosts(state, posts) {
      state.posts = posts
    }
  },
  state: {
    posts: []
  },
  getters: {
    allPosts(state) {
      return state.posts
    }
  },

}