import { Route, Routes } from "react-router-dom";
import { Cart, Home, SignIn, SignUp } from "./pages";
import { Navbar } from './components'
import { SearchProvider, UserProvider } from "./contexts";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  
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
    <UserProvider>
      <SearchProvider>
        <ToastContainer />
        <div className="font-poppins">
          <Routes>
            <Route path="/" element={<Navbar />}>
              <Route index element={<Home />} />
              <Route path="cart" element={<Cart />} />
              <Route path="sign-in" element={<SignIn />} />
              <Route path="sign-up" element={<SignUp />} />
            </Route>
          </Routes>
        </div>
      </SearchProvider>
    </UserProvider>
  );
}

export default App;

