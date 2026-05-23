import React, { useState,useContext } from 'react'
import Icon from './Icon'
import './Header.css'
import Modal from '../cart/Modal'
import { cartContext } from '../shared/cart-context'

const Header = () => {
  const cart = useContext(cartContext);
  const [show, setShow] = useState(false);
  const onClickHandler = () => {
    setShow(true);
  }
  const CancelHandler=()=>{
    setShow(false);
  }
  const SubmitHandler=()=>{
    setShow(false);
    console.log("order placed")
  }
  return (
    <React.Fragment>
      {show && <Modal CancelHandler={CancelHandler} SubmitHandler={SubmitHandler}/>}
      <div className='header'>
        <h1 className='title'>FoodieMeals</h1>
        <button className='cart' onClick={onClickHandler}>
          <span><Icon /></span>
          <span>Cart</span>
          <span className='badge'>{cart.cartitems.length}</span>
        </button>
      </div>
    </React.Fragment>
  )
}

export default Header