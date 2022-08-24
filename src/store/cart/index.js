import counterGetters from "@/store/cart/getters";
import counterActions from "@/store/cart/actions";
import counterMutations from "@/store/cart/mutations";

export const cartModule = {
    // namespaced: true,
    state() {
        return {
            cart: {
                items: [],
                total: 0,
                qty: 0
            },
        }
    },
    mutations: counterMutations,
    actions: counterActions,
    getters: counterGetters
}

