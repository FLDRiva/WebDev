export default {
  actions: {
    async updateItem({commit}) {
      const itemProducts = [
        { 
          id: 1,
          name: 'Goat milk',
          compound: 'Alpine goat milk',
          price: '0.5$',
          date: new Date,
          availability: 20
        },
        {
          id: 2,
          name: 'Cottage cheese',
          compound: 'Goat milk, Bifidobacterium',
          price: '0.7$',
          date: new Date,
          availability: 15
        },
        {
          id: 3,
          name: 'Cheese with spices',
          compound: 'Goat milk, Bifidobacterium, Paprika and Herbs',
          price: '0.8$',
          date: new Date,
          availability: 17
        },
      ]
      setTimeout(() => {
        commit('conectItem', itemProducts)
      }, 300);
    },
  },
  mutations: {
    conectItem(state, products) {
      state.products = products
    },
    addItem(state, newProduct) {
      state.products.push(newProduct) 
    },
  },
  state: {
    products: [],
  },
  getters: {
    ITEM_NAME: state => {
      return state.products.filter(p => {
        return p.name && p.compound
      })
    },
    putItem: state => {
      return state.products.forEach(element => {
        return element
      });
    }
  }
}