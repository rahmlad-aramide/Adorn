import { Route, Routes } from "react-router-dom";
import { Account, Cart, Error, Home, SignIn, SignUp, Success } from "./pages";
import { Navbar } from "./components";
import {
  CartProvider,
  ProductProvider,
  SearchProvider,
  UserProvider,
} from "./contexts";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const toastParams = {
  position: "top-right",
  autoClose: 2500,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: true,
  progress: undefined,
  theme: "light",
};

export const notify = (val) => toast.success(`${val}`, toastParams);
export const warn = (val) => toast.error(`${val}`, toastParams);
export const inform = (val) => toast.info(`${val}`, toastParams);

function App() {
  return (
    <SearchProvider>
      <UserProvider>
        <ProductProvider>
          <CartProvider>
            <div className="font-poppins">
              <Routes>
                <Route path="/" element={<Navbar />}>
                  <Route index element={<Home />} />
                  <Route path="cart" element={<Cart />} />
                  <Route path="account" element={<Account />} />
                  <Route path="success" element={<Success />} />
                  <Route path="sign-in" element={<SignIn />} />
                  <Route path="sign-up" element={<SignUp />} />
                  <Route path="*" element={<Error />} />
                </Route>
              </Routes>
            </div>
          </CartProvider>
        </ProductProvider>
      </UserProvider>
    </SearchProvider>
  );
}

export default App;
