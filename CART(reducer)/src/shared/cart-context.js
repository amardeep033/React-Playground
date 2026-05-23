import { createContext } from "react";

export const cartContext=createContext({
    cartitems:[],
    totamt:0,
    addItem: (item)=>{},
    removeItem: (id)=>{}
})