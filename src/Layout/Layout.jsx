import React from 'react'
import Header from '../components/UI/Header/Header'
import Footer from '../components/UI/Footer/Footer'
import Routers from '../routers/Routers'




const Layout = () => {
    return (
        <div>
            <Header />
        <div>
            <Routers />
        </div>
            <Footer />
        </div>
    )
}

export default Layout;