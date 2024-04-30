import React from 'react'
import './feature.css'
import {featureItems } from '../../../data/dataProducts'
import Product from '../../ProductComponent/Product'


const FeaturedItems = () => {
  return (
    <div className="featuredProducts">
        <div className='top' data-aos="fade-up" data-aos-duration="1500"> 
            <h2>BESTSELLER IN DIESEN MONAT</h2>
        </div>
        <div className="bottom">
            {featureItems.map((product) => <Product product={product} key={product.id} />)}
        </div>
    </div>
  )
}

export default FeaturedItems;