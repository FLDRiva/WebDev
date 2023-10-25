export default {
  actions: {
    async updateItem({commit}) {
      const itemProducts = [
        { 
          id: 1,
          name: 'Goat milk',
          compound: 'Alpine goat milk',
          price: '0.5$',
          data: new Date,
          expirationDate: '',
          availability: 20
        },
        {
          id: 2,
          name: 'Cottage cheese',
          compound: 'Goat milk, Bifidobacterium',
          price: '0.7$',
          data: new Date,
          expirationDate: '',
          availability: 2
        },
        {
          id: 3,
          name: 'Cheese with spices',
          compound: 'Goat milk, Bifidobacterium, Paprika and Herbs',
          price: '0.8$',
          data: new Date,
          expirationDate: '',
          availability: 17
        },
      ]
      setTimeout(() => {
        commit('conectItem', itemProducts)
      }, 2000);
    },
  },
  mutations: {
    conectItem(state, products) {
      state.products = products
    },
  },
  state: {
    products: [],
    searchItem: '',
  },
  getters: {
    ITEM_NAME: state => {
      return state.products.filter(p => {
        return p.name && p.compound
      })
    },
  }
}