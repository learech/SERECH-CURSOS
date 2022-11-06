import { Link } from "react-router-dom";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useCartContext} from '../../context/CartContext'



export const CheckoutForm = () => {
    const {cart, totalPrice } = useCartContext()

    async function CartOrder(e){
        e.preventDefault()
        let order = {}
      
        order.buyer = {
          name: e.target.name.value,
          email: e.target.mail.value, 
          phoneNumber: e.target.phone.value
        }
        order.total = totalPrice()
    
        order.productos = cart.map(ItemCart => {
          const id = ItemCart.curso.id
          const name = ItemCart.curso.name
          const cant = ItemCart.cant
          const price = ItemCart.curso.price * ItemCart.cant 
      
          return {id, name, price, cant}
        })
      
        const db = getFirestore()
        const orderCollection = collection(db, 'orders')
        addDoc(orderCollection, order)
        
      }
    
      return (
        <div className="checkout-form">
          <form onSubmit={CartOrder}>
            <h1>Complete los datos para finalizar la compra</h1>
            <input type="text" name="name" placeholder="Nombre" required></input>
            <input type="text" name="mail" placeholder="Email" required></input>
            <input type="text" name="phone" placeholder="Teléfono" required></input>
            <button type="submit" onClick><Link to='./ordercompleted'>Comprar</Link> </button>
          </form>
        </div>
      )
}