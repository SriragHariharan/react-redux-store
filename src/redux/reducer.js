
const initialState ={
    products:[],
    product:{}
}
const reducer = (state= initialState, action) => {
    switch (action.type) {
        case 'setProducts' :
            return {...state, products:action.payload}
        case 'setAProduct' :
            return {...state, product:action.payload}
        case 'removeProduct' :
            return {...state, product:{}}
        default:
            return state;
    }
}

export default reducer