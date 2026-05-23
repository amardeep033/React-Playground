import React,{useState,useContext} from 'react'
import './Item.css'
import { cartContext } from '../shared/cart-context'

const Item = (props) => {
    const [qty,setQty]=useState(1);
    const cart = useContext(cartContext);
    const SubmitHandler=(e)=>{
        e.preventDefault();
        if(!(qty>=1 && qty<=5))
            return
        cart.addItem({id:props.id,title:props.title,qty:qty,price:props.price})
    }
    return (
        <div>
            <li>
                <div>Title: {props.title}</div>
                <div>Desc: {props.desc}</div>
                <div>Price: {props.price}</div>
            </li>
            <form onSubmit={SubmitHandler}>
                <label htmlFor="qty">QTY:</label>
                <input type='number' min={1} max={5} id="qty" name="qty" value={qty} onChange={(e)=>setQty(e.target.value)}></input>
                <button>Add to cart</button>
            </form>
        </div>
    )
}

export default Item