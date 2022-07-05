import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const baseURL = "http://localhost:3000/";
export default new Vuex.Store({
  state: {
    pizzas: [],
    cart: []
  },
  getters: {
    /**
     * https://thecodebarbarian.com/javascript-reduce-in-5-examples.html
     * @param state
     * @returns {*}
     */
    cartTotal(state) {
      return state.cart.reduce((total, item) => {
        let pizzas = state.pizzas.find(p => p.name === item.name);
        return total + (pizzas.price * item.quantity);
      }, 0);
    }
  },
  mutations: {
    setPizzas(state, pizzas) {
      state.pizzas = pizzas;
    },
    addToCart(state, pizzas) {
      let index = state.cart.findIndex(p => p.name === pizzas.name);
      if (index !== -1) {
        state.cart[index].quantity++;
      } else {
        state.cart.push({name: pizzas.name, quantity: 1});
      }
    },
    removeFromCart(state, pizzas) {
      let index = state.cart.findIndex(p => p.name === pizzas.name);
      if (index !== -1) {
        state.cart[index].quantity--;
        if (state.cart[index].quantity === 0) state.cart.splice(index, 1);
      }
    }
  },
  actions: {
    loadPizzas(context) {
      fetch(baseURL + "v1/pizzas")
          .then((res) => {
            //console.log(res.json());
            return res.json();
          })
          .then((data) => {
            //console.log(data);
            context.commit('setPizzas', data);
          }).catch(error => {
        console.error(error);
      });
    }
  },

})
