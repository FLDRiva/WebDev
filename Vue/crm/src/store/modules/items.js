export default {
  actions: {

  },
  mutations: {

  },
  state: {
    products: [
      { 
        id: 1,
        name: 'Goat milk',
        compound: 'Alpine goat milk',
        price: '0.5$',
        data: new Date,
        expirationDate: '',
      },
      {
        id: 2,
        name: 'Cottage cheese',
        compound: 'Goat milk, Bifidobacterium',
        price: '0.7$',
        data: new Date,
        expirationDate: '',
      },
      {
        id: 3,
        name: 'Cheese with spices',
        compound: 'Goat milk, Bifidobacterium, Paprika and Herbs',
        price: '0.8$',
        data: new Date,
        expirationDate: '',
      },
      
    ]
  },
  getters: {
    ITEM_NAME: state => {
      return state.products.filter(p => {
        return p.name
      })
    },
  }
}