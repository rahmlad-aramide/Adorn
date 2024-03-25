import { Route, Routes } from "react-router-dom";
import {
  AboutPage,
  Account,
  Cart,
  CatalogPage,
  CategoriesPage,
  Error,
  Favorites,
  Home,
  ProductPage,
  SignIn,
  SignUp,
  Success,
} from "./pages";
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

const user = {
  uid: "rAcvdBvM3ChrCIFCxKKD7NOMUCV2",
  email: "abdrahmanoladimeji02@gmail.com",
  emailVerified: true,
  displayName: "Abdrahman Oladimeji",
  isAnonymous: false,
  photoURL:
    "https://lh3.googleusercontent.com/a/AGNmyxajDh4-uqZhVfzitnUhM4cjVIHQykGujhOqNK6_vw=s96-c",
  providerData: [
    {
      providerId: "google.com",
      uid: "103213730085651171530",
      displayName: "Abdrahman Oladimeji",
      email: "abdrahmanoladimeji02@gmail.com",
      phoneNumber: null,
      photoURL:
        "https://lh3.googleusercontent.com/a/ACg8ocJGQU59flXQ7UusPmarwVX8NoA03Fww1-HTC-NLQw0QZkc=s96-c",
    },
  ],
  stsTokenManager: {
    refreshToken:
      "AMf-vByOPn9QNWKVJTjAuuOHTAqMef7IdKlDUFmD4XCIAiyYkgfSOoQJ_x5S22TlU52gpXzcwEsrahxizz02ClLnXZJ0dEaxqxPmNYFD2SJe6qTbI6SfrfKGix_xbEfNSwnDb23YRVivwgVN44-RbyuFv4a_mOuTwXAsC44cx6epnOMJ8kNB98kmLF9nkoLrUdxa4EXrsST5PGWblyr5L2CKVtAHdEe7lErDAXbI13V8KPyveJhpUReTPqJgZqlx9SCPpMRMMH9_Mr12uW1TZ6LmuxG6aQGm5uQkXnO-6zEuaZYhYTLYDEQtTxp8o2iJKNam6cjtetChP-fVt_kIJV6agb_5z8dKajmnYLFC3xXDwJjakhonmvmDL0CySop7C0wYQdS79_R2osHeUCMYpl96ickLX4JXYaDSZQBcchPTdhV3xR3OH9cWOASljzexJ0I6ncJ9N7O7",
    accessToken:
      "eyJhbGciOiJSUzI1NiIsImtpZCI6IjYwOWY4ZTMzN2ZjNzg1NTE0ZTExMGM2ZDg0N2Y0M2M3NDM1M2U0YWYiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiQWJkcmFobWFuIE9sYWRpbWVqaSIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BR05teXhhakRoNC11cVpoVmZ6aXRuVWhNNGNqVklIUXlrR3VqaE9xTks2X3Z3PXM5Ni1jIiwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL2Fkb3JuLWhvbWUtZGVjb3IiLCJhdWQiOiJhZG9ybi1ob21lLWRlY29yIiwiYXV0aF90aW1lIjoxNzEwMjQ0Njc2LCJ1c2VyX2lkIjoickFjdmRCdk0zQ2hyQ0lGQ3hLS0Q3Tk9NVUNWMiIsInN1YiI6InJBY3ZkQnZNM0NockNJRkN4S0tEN05PTVVDVjIiLCJpYXQiOjE3MTAyNDQ2NzYsImV4cCI6MTcxMDI0ODI3NiwiZW1haWwiOiJhYmRyYWhtYW5vbGFkaW1lamkwMkBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJnb29nbGUuY29tIjpbIjEwMzIxMzczMDA4NTY1MTE3MTUzMCJdLCJlbWFpbCI6WyJhYmRyYWhtYW5vbGFkaW1lamkwMkBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJnb29nbGUuY29tIn19.GNcymZ0c_haHQdPj8fpSPYu_ThAc9f-Z_kdAnb9D84vAshwX4Wa6Rc-ODy5UmPlJ8BfB7ivZxU8JEsQlFG4cnqK1WcZX971wFeiJ9TcPjiw6ufpDQ7xBgeiBm3Ow2Hfc0fYV7RdvONU0vQCYLcc6293TZfTR-Uuq6TNqqKNKvwVXFvAXQqmulbvS7x0jAJ4tGh_5ChQfc2PXcO3iccOwWr2sKMYSrLFuf2N-jJAT5si0jiNRuJo9EB-Lkb1NEn26ALofinaXXrcUvRt4A89pUcRd7gWTMQmHpDsRO8oyJvy2Oq1Dm57QdEASTvcugPikANNg1uSdsh5JDOBHAcEADw",
    expirationTime: 1710248276743,
  },
  createdAt: "1683974747162",
  lastLoginAt: "1710244546503",
  apiKey: "AIzaSyCmmCY9GulJs3P6rBGjzllst251cL_BQtk",
  appName: "[DEFAULT]",
};

const userData = {
  uid: "rAcvdBvM3ChrCIFCxKKD7NOMUCV2",
  email: "abdrahmanoladimeji02@gmail.com",
  emailVerified: true,
  displayName: "Abdrahman Oladimeji",
  isAnonymous: false,
  createdAt: "1683974747162",
  lastLoginAt: "1710244546503",
  photoURL:
    "https://lh3.googleusercontent.com/a/AGNmyxajDh4-uqZhVfzitnUhM4cjVIHQykGujhOqNK6_vw=s96-c",
};
function App() {
  return (
    <SearchProvider>
      <UserProvider>
        <ProductProvider>
          <CartProvider>
            <section className="font-poppins">
              <Routes>
                <Route path="/" element={<Navbar />}>
                  <Route index element={<Home />} />
                  <Route path="about" element={<AboutPage />} />
                  <Route path="cart" element={<Cart />} />
                  <Route path="products/:id" element={<ProductPage />} />
                  <Route path="favorites" element={<Favorites />} />
                  <Route path="catalog/:name" element={<CatalogPage />} />
                  <Route path="categories/:name" element={<CategoriesPage />} />
                  <Route path="account" element={<Account user={userData} />} />
                  <Route path="success" element={<Success />} />
                  <Route path="sign-in" element={<SignIn />} />
                  <Route path="sign-up" element={<SignUp />} />
                  <Route path="*" element={<Error />} />
                </Route>
              </Routes>
            </section>
          </CartProvider>
        </ProductProvider>
      </UserProvider>
    </SearchProvider>
  );
}

export default App;
