import React from 'react'
import { FaTruckMoving } from 'react-icons/fa';
import { AiOutlineUser } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsBagCheck } from 'react-icons/bs';
import { CiLogin } from 'react-icons/ci';
import { CiLogout } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import './Nav.css'

const Nav = () => {
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
                    <input type="text" value='' placeholder='Search Your Product...' autoComplete='off'/>
                    <button>Search</button>
                </div>
                <div className='icon'>
                    <div className='account'>
                        <div className='user_icon'>
                            <AiOutlineUser />
                        </div>
                        <p>Hello, User</p>
                    </div>
                    <div className='sec_icon'> 
                        <Link to="/" className='link'><AiOutlineHeart /></Link>
                        <Link to="/cart" className='link'><BsBagCheck /></Link>
                    </div>
                </div>
            </div>
        </div>

        <div className='header'>
            <div className='container'>
                <div className='nav'>
                    <ul>
                        <li>
                            <Link to='/' className='link'>Home</Link>
                        </li>
                        <li>
                            <Link to='/product' className='link'>Product</Link>
                        </li>
                        <li>
                            <Link to='/about' className='link'>About</Link>
                        </li>
                        <li>
                            <Link to='/contact' className='link'>Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className='auth'>
                    <button><CiLogin /></button>
                    <button><CiLogout /></button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Nav