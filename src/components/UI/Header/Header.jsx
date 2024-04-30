import React, { useRef, useState } from 'react';
import './header.css';
import { motion } from "framer-motion"
import { NavLink, Link } from 'react-router-dom';
import { MdOutlineShoppingBag, MdMenu, MdClose } from "react-icons/md";
import { useSelector } from 'react-redux';
import { getTotalArticles } from '../../../redux/cartSlice';
import Cart from '../../Cart/Cart'


const nav_links = [
    {
      path: '/',
      display: 'Startseite'
    },
    {
      path: 'shop',
      display: 'Shop'
    },
    {
      path: 'about',
      display: 'Über uns'
    },
    {
      path: 'contact',
      display: 'Kontakt / Feedback'
    }
  ]

const Header = () => {
  const [cartContainer, setCartContainer] = useState(false);
  const [fixNav, setFixNav] =useState(false)
  const menuRef = useRef(null);
  const openCart = () => {
    setCartContainer(!cartContainer)
  }

  const setFixNavbar = () => {
    if (window.scrollY >= 115 ) {
      setFixNav(true);
    }
    else setFixNav(false)
  }
  window.addEventListener('scroll', setFixNavbar)
  const totalItems = useSelector(getTotalArticles);
  const menuToggle = () => menuRef.current.classList.toggle('active-menu')


return (
  <div className={fixNav ? 'header fixed' : 'header'} >
    <div className='nav-wrapper'>
      <div >
        <Link className='logo' to='/'>
          <h1>Nerd's ComputerShop</h1>
        </Link>
      </div>

{/* ist für das mobile menü zuständig */}
      <div className='navigation' ref={menuRef} onClick={menuToggle}>
        <ul className='menu'>
          {nav_links.map((item, id) => (
            <li className='nav-item' key={id}>
              <NavLink to={item.path} className={(navClass) => navClass.isActive ? 'nav_active' : ''}>{item.display}</NavLink>
            </li>
            ))}
        </ul>
      </div>

      <div className='nav-icons'>
        <motion.div whileHover={{scale: 1.2}} className="cart-container cart-icon" onClick={() => openCart()}>
          <MdOutlineShoppingBag />
        </motion.div> 
        {totalItems > 0 &&
          <span onClick={() => openCart()} className='totalItemsCart'>{totalItems}</span>
        }
        <div className={cartContainer ? 'container-cart-true' : 'container-cart-false'}>
          <div className='box-close-cart'>
            <h3 className="box-close-title">Warenkorb</h3>
          <hr className='vert'/>
            <button className='btn-close-cart' onClick={() => openCart()}>
              <MdClose />
            </button>
          </div>

          <hr className='horz' />
          <Cart/>
        
        </div>

        <div className='mobile-menu' onClick={menuToggle}>
          <motion.span whileHover={{scale: 1.2}} >
            <MdMenu />
          </motion.span>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Header;
