import React from 'react'
import { BrowserRouter } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

import MyRoutes from "../routes/MyRoutes";

const Layout = () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <div className='container'>
                    <div className='main'>
                        <MyRoutes />
                    </div>
                </div>
                <Footer />
            </div>
        </BrowserRouter>
    )
}

export default Layout