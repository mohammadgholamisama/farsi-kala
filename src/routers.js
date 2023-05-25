import Home from "./components/Home/Home";
import ProductPage from "./components/ProductPage/ProductPage";
import AllProductsPage from "./components/AllProductsPage/AllProductsPage";

const routers = [
    { path: '/', element: <Home /> },
    { path: '/product/:productID', element: <ProductPage /> },
    { path: '/all-products', element: <AllProductsPage /> }
]

export default routers