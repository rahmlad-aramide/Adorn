import { useContext } from "react"
import { EmptyCart, FilledCart, TopSelling } from "../components"
import { CartContext } from "../contexts/CartContext";
import { ToastContainer } from "react-toastify"

const Cart = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className='pt-20 bg-tertiary/10 min-h-screen flex flex-col justify-center'>
      <ToastContainer />
      <div className="flex justify-center mt-4">
        <div className="flex justify-center items-center my-auto w-[90%] max-w-[1140px]">
          {cartItems.length === 0 ?
          <EmptyCart />
        :
         <FilledCart cartItems={cartItems} />
        }
        </div>
      </div>
      <div className="flex justify-center">
        <div className=" w-[90%] max-w-[1140px]">
          <TopSelling />
        </div>
      </div>
    </div>
  )
}

export default Cart
