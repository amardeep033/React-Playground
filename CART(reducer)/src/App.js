import React, {useReducer} from 'react'
import './App.css';
import Header from './extra/Header';
import List from './meals/List';
import { cartContext } from './shared/cart-context';

const cartReducer = (state, action) => {
  switch (action.type) 
  {
    case 'ADD_ITEM':
                    const updatedTotAmt=state.totamt+(action.item.price*action.item.qty);
                    const existingIndex=state.cartitems.findIndex((it)=>it.id===action.item.id)
                    let updatedCartItems
                    if(existingIndex===-1){
                      updatedCartItems= state.cartitems.concat(action.item);
                    }
                    else{
                      const existingItem=state.cartitems[existingIndex]
                      const updatedItem={...existingItem,qty:parseInt(existingItem.qty)+parseInt(action.item.qty)}
                      updatedCartItems=[...state.cartitems];
                      updatedCartItems[existingIndex]=updatedItem;
                    }
                    return {
                      cartitems:updatedCartItems,
                      totamt:updatedTotAmt
                    };
    case 'REMOVE_ITEM': 
                    let updatedCartItems2;
                    const existingIndex2=state.cartitems.findIndex((it)=>it.id===action.id)
                    const existingItem2=state.cartitems[existingIndex2]
                    const updatedTotAmt2=state.totamt-existingItem2.price;
                    if(parseInt(existingItem2.qty)===1)
                    {
                      updatedCartItems2=[...state.cartitems];
                      updatedCartItems2.splice(existingIndex2,1);
                    }
                    else
                    {
                      const updatedItem2={...existingItem2,qty:parseInt(existingItem2.qty)-1}
                      updatedCartItems2=[...state.cartitems];
                      updatedCartItems2[existingIndex2]=updatedItem2;
                    }
                    return {
                      cartitems:updatedCartItems2,
                      totamt:updatedTotAmt2
                    };
    default: return state;
  }
}

const App = () => {
  const [cartState,dispatchCartAction]=useReducer(cartReducer,{cartitems:[],totamt:0});

  const addItem = (item) => {
    dispatchCartAction({type:'ADD_ITEM', item:item});
  }
  const removeItem = (id) => {
    dispatchCartAction({type:'REMOVE_ITEM', id:id});
  }

  return (
    <cartContext.Provider value={{cartitems:cartState.cartitems,totamt:cartState.totamt,addItem:addItem,removeItem:removeItem }}>
      <Header />
      <List />
    </cartContext.Provider>
  )
}

export default App