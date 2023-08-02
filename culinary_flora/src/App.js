import {React,useState,useEffect} from 'react';
import { Products } from './features/products/Products';
import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import { Cart } from './features/cart/Cart';

import { fetchAsync } from './features/cart/cartSlice';


function App() {
  const [showCart,setShowCart]=useState(false);
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  
  useEffect(() => {
    dispatch(fetchAsync());
  }, []);

  
  return (
    <div className="App">
      
      <button onClick={()=>setShowCart(!showCart)}>Cart [{items.length}]</button>
      {showCart?<Cart/>:<Products/> }
      
    </div>
  );
}

export default App;
// json-server --watch db.json --port 8080
