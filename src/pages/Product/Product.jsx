import React from 'react'
import './product.scss'
import { useState } from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Product = () => {

const [quantity,setquantity] = useState(1);
const [selectedImg,setSelectedImg] = useState(0);


 const images = [

      "https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=600",

 ];


  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={e=>setSelectedImg(0)}/>
          <img src={images[1]} alt="" onClick={e=>setSelectedImg(1)}/>

        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt=""/>
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span className="price">Rs.5000</span>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, ex soluta adipisci unde illo neque fugit mollitia sunt dignissimos ab molestias nisi excepturi nihil, quas aut pariatur tenetur dicta distinctio!</p>
      <div className="quantity">
        <button onClick={()=>setquantity((prev)=>(prev === 1 ? 1 : prev-1))}>-</button>
        {quantity}
        <button onClick={()=>setquantity((prev)=>prev+1)}>+</button>
      </div>
        <button className="add">
        <AddShoppingCartIcon/> ADD TO CART
        </button>
        <div className="link">
          <FavoriteBorderIcon/> ADD TO WISH LIST
        </div>
        <div className="info">
          <span>vendor: GMD</span>
          <span>Type: T-Shirt</span>
          <span>Tag: T-Shirt, Women, Top</span>
        </div>
        <hr />
        <div className="info">
          <span>DESCRIPTION</span>
       <hr/>
        <span>ADITIONAL INFORMATION</span>
        <hr/>
        <span>FAQ</span>
        </div> 
        </div>
        
      </div>
    
  )
}

export default Product