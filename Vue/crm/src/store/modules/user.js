export default {

  actions: {
    async addUserBio() {
      return this.inform
    }
  },
  mutations: {
    SET_NAME: (state, payload) => {
      state.user.name = payload
    },
    SET_MAIL: (state, payload) => {
      state.user.mail = payload
    },
    SET_INFO: (state, payload) => {
      state.userInfo = payload
    },
    SET_DATE: (state, payload) => {
      state.user.date = payload
    }
  },
  state: {
    user: {
      name: 'Ivan',
      mail: 'Ivanov@gmail.com',
      date: '',
      info: '',
    },
    userInfo: [],
  },
  getters: {
    NAME: state => {
      return state.user.name
    },
    INFO: state => {
      return state.userInfo
    },
    MAIL: state => {
      return state.user.mail
    },
    DATE: state => {
      return state.user.date
    }
  }

}