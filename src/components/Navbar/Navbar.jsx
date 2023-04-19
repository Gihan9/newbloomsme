import React from 'react'

import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import "./navbar.scss";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="wrapper">
            
            <div className="left">
            <div className='item'>
                <h3>GMD</h3>
                </div>
                
                <div className='item'>
                    <Link className="link" to="/products/1">Women</Link>
                </div>
                <div className='item'>
                    <Link className="link" to="/products/2">Men</Link>
                </div>
                <div className='item'>
                    <Link className="link" to="/products/3">Kid</Link>
                </div>
                
            </div>
            <div className="center">

            </div>
            <div className="right">
            <div className="item">
                <Link className="link" to="/">Home</Link>

                </div>
                <div className="item">
                <Link className="link" to="/">About</Link>

                </div>
                <div className="item">
                <Link className="link" to="/">Contact</Link>

                </div>
                <div className="item">
                <Link className="link" to="/">Stores</Link>

                </div>
                <div className="icons">
                    <SearchIcon/>
                    <PersonOutlineIcon/>
                    <FavoriteBorderIcon/>
                    <div className="cart">
                        <AddShoppingCartIcon/>
                        <span>0</span>
                    </div>
                    

                </div>

            </div>
            
        </div>
    </div>
  )
}

export default Navbar