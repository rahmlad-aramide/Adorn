import { Route, Routes } from "react-router-dom";
import { Home } from "./pages";
import { Navbar } from './components'
import { SearchProvider, UsersProvider } from "./contexts";


function App() {

  return (
    <UsersProvider>
      <SearchProvider>
        <div className="font-poppins">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </SearchProvider>
    </UsersProvider>
  );
}

export default App;

