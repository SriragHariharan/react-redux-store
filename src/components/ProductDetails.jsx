import axios from 'axios'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { removeProduct, setAProducts } from '../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import { Rating } from 'react-simple-star-rating'

function ProductDetails() {
  const product = useSelector(state => state.product)
  const dispatch = useDispatch()
    const {id} = useParams()
    useEffect(()=>{
      axios.get('https://fakestoreapi.com/products/'+id)
      .then(resp => dispatch(setAProducts(resp.data)))
      .catch(err => console.log(err))
      return ()=> {
        dispatch(removeProduct())
      }
    },[])
    return (
    <section style={{backgroundColor:"#eee"}}>
      <div className="container py-5">
    <div className="row justify-content-center">
      <div className="col-md-8 col-lg-6 col-xl-4">
        <div className="card text-black">
          <i className="fab fa-apple fa-lg pt-3 pb-1 px-3"></i>
          <p className="text-center">
            <img src={product.image}
              className="card-img-top" alt={product.title} style={{width:'60%'}} />
            </p>
          <div className="card-body">
            <div className="text-center">
              <h5 className="card-title">{product.title}</h5>
            <p className="text-center">
              <Rating initialValue={product?.rating?.rate} /> ({product?.rating?.count})
            </p>
              <br />
              <p className="text-muted mb-4">category : {product.category}</p>
              <p className="text-muted mb-4">{product.description}</p>
            </div>
            
            <div className="d-flex justify-content-between total font-weight-bold mt-4">
              <span>Price </span><span>$ <b>{product.price}</b></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default ProductDetails