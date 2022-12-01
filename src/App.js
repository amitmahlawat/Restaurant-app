
import React,{ useState} from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./store/CartProvider";


function App() {

const[cartIsShown,setCartisShown]=useState(false);

const showCartHandler =()=>{
  setCartisShown(true)
};

const HidecartHandler=()=>{
  setCartisShown(false)
};

  return (
   <CartProvider>
    {cartIsShown && <Cart onClose={HidecartHandler}/>}
    <Header onShowcart={showCartHandler}/>
    <main>
      <Meals/>
    </main>
   </CartProvider>
  );
}

export default App;
