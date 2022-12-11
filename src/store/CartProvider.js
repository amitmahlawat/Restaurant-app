import React,{ useEffect, useState } from 'react';
import CartContext from './cart-context';



const CartProvider = (props) => {
    
const[items,updateItems]=useState([])

  const addItemToCartHandler = (item) => {
    let ExistingItem=items.findIndex((data)=>{
        return data.id===item.id;

    })
    
    
    if(ExistingItem===-1){
        updateItems([...items,item])
        
        
    }else{
        const temp=[...items]
        temp[ExistingItem].quantity=Number(temp[ExistingItem].quantity) + Number(item.quantity)
        updateItems(temp)
    }}

   

  const removeItemFromCartHandler = (item) => {
    // // console.log('working')
    
    // let ExistingItem=items.findIndex((data)=>{
    //     return (data.id)
        
    // })
    
    // console.log(ExistingItem)
    // if(ExistingItem=0){
        const temp=[...items]
        if(item.quantity>=1){
        item.quantity=item.quantity - 1}
        updateItems(temp)
    //     // items[ExistingItem].price=Number(items[ExistingItem].price) - Number(items[ExistingItem].price)
        
    //  }
    // console.log()

    
    
  };

  const cartContext = {
    items:items,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    
  };

  

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;