import Home from '../pages/home/Home'
import Shop from '../pages/shop/Shop'
import ProductDetails from '../components/ProductComponent/ProductDetails'
import { Route, Routes } from 'react-router-dom'
import About from '../pages/About/About'
import Contact from '../pages/contact/Contact'
import CheckoutSuccess from '../pages/checkout/CheckoutSuccess'
import CheckoutCancel from '../pages/checkout/CheckoutCancel'


const Routers = () => {
    return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} /> 
        <Route path="shop/:id" element={<ProductDetails />} />
        <Route path="checkout-success" element={<CheckoutSuccess />} />
        <Route path="checkout-cancel" element={<CheckoutCancel />} />
    </Routes>
    )
}

export default Routers;