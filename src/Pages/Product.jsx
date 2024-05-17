import React, { useContext } from 'react'
import all_product from '../Components/Assets/all_product'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrums from '../Components/Breadcrums/Breadcrums'
import ProductDisplay from '../Components/ProductDisplay/PrioductDisplay'
import Description from '../Components/DescriptionBox/Description'
import RelatedProduct from '../Components/RelatedProduct/RelatedProduct'

const Product = () => {
  const {all_product}=useContext(ShopContext)
  const {productId} = useParams();
  const product = all_product.find((e)=>e.id === Number(productId));
  return (
    <div>
      <Breadcrums product={product}/>
      <ProductDisplay product={product}/>
      <Description/>
      <RelatedProduct />
    </div>
  )
}

export default Product
