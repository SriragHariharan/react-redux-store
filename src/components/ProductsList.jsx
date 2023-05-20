import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setAllProducts } from '../redux/actions'
import ProductsCard from './ProductsCard';
import Loader from './Loader';

function ProductsList() {
    const products = useSelector(state => state?.products)
    const [loading, isLoading] = useState(false)
    const [error, isError] = useState(null)
    const dispatch = useDispatch()
    useEffect(()=>{
        isLoading(true)
        axios.get('https://fakestoreapi.com/products')
        .then(resp => {
            dispatch(setAllProducts(resp.data))
            isLoading(false)
        })
        .catch(err => {
            isError(err.message)
            isLoading(false)
        } )
    },[dispatch])
  return (
    <div>
        {loading && <Loader/> }
        {error && <h1>{error}</h1> }
        {products && <ProductsCard/> }
    </div>
        
      )
}

export default ProductsList