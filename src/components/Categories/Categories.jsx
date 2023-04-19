import React from 'react'
import "./categories.scss"
import { Link } from 'react-router-dom'

const Categories = () => {
  return (
    <div className="categories">
        <div className="col">
        <div className="row"><img src="https://images.pexels.com/photos/10496208/pexels-photo-10496208.jpeg?auto=compress&cs=tinysrgb&w=600" />
        
        <button>
            <Link className="link" to="/products/1">Sale</Link></button></div>
        <div className="row"><img src="https://images.pexels.com/photos/10496208/pexels-photo-10496208.jpeg?auto=compress&cs=tinysrgb&w=600" />
        
        <button>
            <Link className="link" to="/products/1">Sale</Link></button></div>
        </div>

        <div className="col">
        <div className="row"><img src="https://images.pexels.com/photos/10496208/pexels-photo-10496208.jpeg?auto=compress&cs=tinysrgb&w=600" />
        
        <button>
            <Link className="link" to="/products/1">Sale</Link></button></div>
        </div>


        
        <div className="col col-l">
            <div className="row">
            <div className="col">
                <div className="row"><img src="https://images.pexels.com/photos/10496208/pexels-photo-10496208.jpeg?auto=compress&cs=tinysrgb&w=600" />
        
        <button>
            <Link className="link" to="/products/1">Sale</Link></button></div>
            </div>
            <div className="col">
                <div className="row"><img src="https://images.pexels.com/photos/10496208/pexels-photo-10496208.jpeg?auto=compress&cs=tinysrgb&w=600" />
        
        <button>
            <Link className="link" to="/products/1">Sale</Link></button></div>
            </div>
            </div>
            <div className="row"><img src="https://images.pexels.com/photos/10496208/pexels-photo-10496208.jpeg?auto=compress&cs=tinysrgb&w=600" />
        
        <button>
            <Link className="link" to="/products/1">Sale</Link></button></div>
        </div>
        
    </div>
  )
}

export default Categories