import React, { useContext } from 'react'
import './CSS/SSS.css'
// import all_product from '../Components/Assets/all_product'
import dropdwon_icon from '../Components/Assets/dropdown_icon.png'
import { ShopContext } from '../Context/ShopContext'
import Item from '../Components/Item/Item'
const ShopCategory = (props) => {
  const{all_product} = useContext(ShopContext);
  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Show 1-2</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img  src={dropdwon_icon} alt="" />
        </div>
      </div>

      <div className="shopcategory-product">
        {all_product.map((item,i)=>{
          if(props.category===item.category){
            return  <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          }
          else{
            return null;
          } 
        })}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory
