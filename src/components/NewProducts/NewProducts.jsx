import React from 'react'
import "./newproducts.scss"
import Card from "../Card/Card"

const NewProducts = ({type}) => {


    const data = [
    {
        id: 1,
        img: "https://images.pexels.com/photos/14586828/pexels-photo-14586828.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        img2: "https://images.pexels.com/photos/14586818/pexels-photo-14586818.jpeg?auto=compress&cs=tinysrgb&w=600",
        title: "T-shirt",
        isNew: true,
        oldPrice: 2000,
        price: 1500,
    },
    {
        id: 2,
        img: "https://images.pexels.com/photos/14586828/pexels-photo-14586828.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        img2: "https://images.pexels.com/photos/14586818/pexels-photo-14586818.jpeg?auto=compress&cs=tinysrgb&w=600",
        title: "T-shirt",
        isNew: true,
        oldPrice: 2000,
        price: 1500,
    },
    {
        id: 3,
        img: "https://images.pexels.com/photos/14586828/pexels-photo-14586828.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        img2: "https://images.pexels.com/photos/14586818/pexels-photo-14586818.jpeg?auto=compress&cs=tinysrgb&w=600",
        title: "T-shirt",
        isNew: true,
        oldPrice: 2000,
        price: 1500,
    },
    {
        id: 4,
        img: "https://images.pexels.com/photos/14586828/pexels-photo-14586828.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        img2: "https://images.pexels.com/photos/14586818/pexels-photo-14586818.jpeg?auto=compress&cs=tinysrgb&w=600",
        title: "T-shirt",
        isNew: true,
        oldPrice: 2000,
        price: 1500,
    },
    



    ];


  return (
    <div className="newproducts">

        <div className="top">
            <h1>{type} Fashions</h1>
        </div>
        <div className="bottom">
            {data.map(item=>(
                <Card item={item} key={item.id}/>
            ))}
        </div>
    </div>
  )
}

export default NewProducts