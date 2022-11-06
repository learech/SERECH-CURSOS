import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import CartProvider from "./context/CartContext";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import { CheckoutForm } from "./components/CheckoutForm/Checkoutform";
import {OrderCompleted} from "./components/OrderCompleted/OrderCompleted"
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/categoria/:categoriaId' element={<ItemListContainer />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/detalle/:detalleId' element={<ItemDetailContainer />} />
          <Route path='*' element={<Navigate to='/' />} />
          <Route path='/checkout' element={ <CheckoutForm/> } />
          <Route path='/ordercompleted' element={ <OrderCompleted/> } />
        </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
