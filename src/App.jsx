import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import About from "./pages/About";
import Products from "./pages/products";
import ProductsList from "./pages/ProductsList";
import SingleProduct from "./pages/singleProduct";
import NavBar from "./components/navBar";

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/products" element={<Products />}>
                        <Route index element={<ProductsList />} />
                        <Route path=":id" element={<SingleProduct />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
