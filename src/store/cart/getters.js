export default {
    cartTotal(state) {
        return state.cart.total.toFixed(2);
    },
    allCartItems(state) {
        return state.cart
    },
    cartAmount(state) {
        return state.cart.qty
    }
}