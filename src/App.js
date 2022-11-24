
import React,{Fragment, useState} from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";


function App() {

const[cartIsShown,setCartisShown]=useState(false);

const showCartHandler =()=>{
  setCartisShown(true)
};

const HidecartHandler=()=>{
  setCartisShown(false)
};

  return (
   <Fragment>
    {cartIsShown && <Cart onClose={HidecartHandler}/>}
    <Header onShowcart={showCartHandler}/>
    <main>
      <Meals/>
    </main>
   </Fragment>
  );
}

export default App;
