import React,{useContext} from 'react'
import ReactDOM from 'react-dom'
import Card from '../shared/Card'
import './Modal.css'
import { cartContext } from '../shared/cart-context'

const Backdrop = (props) => {
    return (
        <div className='backdrop' onClick={props.CancelHandler} />
    )
}

const ModalOverlay = (props) => {
    const cart = useContext(cartContext);
    const AddHandler=(it)=>{
        cart.addItem({...it,qty:1})
    }
    const RemoveHandler=(it)=>{
        cart.removeItem(it.id)
    }
    return (
        <div className='overlay'>
            <Card>
                <h1>CART</h1>
                <ul>
                    {cart.cartitems.map(it => (
                    <li className='items'>
                        <div>Name: {it.title}</div>
                        <div>Price: {it.price}</div>
                        <div>Quan: {it.qty}</div>
                        <div>Amount: {it.qty*it.price}</div>
                        <button onClick={()=>AddHandler(it)}>+</button>
                        <button onClick={()=>RemoveHandler(it)}>-</button>
                    </li>))}
                </ul>
                <div>Total: {cart.totamt}</div>
                <button onClick={props.SubmitHandler}>Submit</button>
                <button onClick={props.CancelHandler}>Cancel</button>
            </Card>
        </div>
    )
}

const Modal = (props) => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop CancelHandler={props.CancelHandler} />, document.getElementById('backdrop-root'))}
            {ReactDOM.createPortal(<ModalOverlay items={props.items} SubmitHandler={props.SubmitHandler} CancelHandler={props.CancelHandler} />, document.getElementById('overlay-root'))}
        </React.Fragment>
    )
}

export default Modal