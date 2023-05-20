function setAllProducts(products){
    return{
        type:'setProducts',
        payload:products
    }
}

function setAProducts(product){
    return{
        type:'setAProduct',
        payload:product
    }
}

function removeProduct(){
    return{
        type:'removeProduct',
    }
}

export { setAllProducts, setAProducts, removeProduct }