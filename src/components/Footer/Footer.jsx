import React from 'react'
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
        <div className="top">
            <div className="item">
                <h1>Categories</h1>
                <span>Women</span>
                <span>Men</span>
                <span>New</span>

            </div>
            <div className="item">
                <h1>Links</h1>
                <span>FAQ</span>
                <span>Pages</span>
                <span>Stories</span>
                <span>Compare</span>
                
                
            </div>
            <div className="item">
                <h1>About</h1>
                <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, aspernatur temporibus! Sed provident eveniet blanditiis consequuntur neque soluta vero excepturi expedita libero. Facilis quia sed vero quaerat optio corrupti sint.</span>
            </div>
            <div className="item">
                <h1>Contact</h1>
                <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, aspernatur temporibus! Sed provident eveniet blanditiis consequuntur neque soluta vero excepturi expedita libero. Facilis quia sed vero quaerat optio corrupti sint.</span>
            </div>
        </div>
        <div className="bottom">
            <div className="left">
                <span className="copyright"> Copyright 2023. All Rights Reserved</span>
            </div>

        </div>
    </div>
  )
}

export default Footer