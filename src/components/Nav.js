import React from 'react'
import { FaTruckMoving } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsBagCheck } from 'react-icons/bs';
import './Nav.css'

function Nav() {
  return (
    <>
        <div className='free'>
            <div className='icon'>
                <FaTruckMoving />
            </div>
            <p>Free Delivery...</p>
        </div>

        <div className='main_header'>
            <div className='container'>
                <div className='logo'>
                    <img src='./img/logo.svg' alt='logo'></img>
                </div>
                <div className='search_box'>
                    <input type="text" value='' placeholder='Enter the Product Name' autoComplete='off'/>
                    <button>Search</button>
                </div>
                <div className='icon'>
                    <AiOutlineHeart />
                    <BsBagCheck />
                </div>
            </div>
        </div>
    </>
  )
}

export default Nav