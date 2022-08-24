import {createStore} from "vuex";
import rootMutations from "@/store/mutations";
import rootActions from "@/store/actions";
import rootGetters from "@/store/getters";
import {cartModule} from "@/store/cart";
import {productsModule} from "@/store/products";

const store = createStore({
    modules: {
        cart: cartModule,
        products: productsModule
    },
    state() {
        return {
            isLoggedIn: false
        }
    },
    mutations: rootMutations,
    actions: rootActions,
    getters: rootGetters
})

export default store