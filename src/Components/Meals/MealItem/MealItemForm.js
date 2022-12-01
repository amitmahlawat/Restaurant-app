import React, { useContext } from 'react';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';
import CartCntxt from '../../../store/cart-context';
const MealItemForm = (props) => {
   const Cartcntxt=useContext(CartCntxt)
    const addItemToCart=(event)=>{
        event.preventDefault()
        // console.log(event.target)
        // Cartcntxt.items.push(props.item)
        const quantity=document.getElementById('amount_' + props.id).value
        Cartcntxt.addItem({...props.item, quantity:quantity})
        console.log('after addItemToCart', Cartcntxt)

    }

  return (
    <form className={classes.form} >
        {console.log('inside render',Cartcntxt.items)}
      <Input
      
      label='Amount'
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button onClick={addItemToCart}>+ Add</button>
      
    </form>
  );
};

export default MealItemForm;