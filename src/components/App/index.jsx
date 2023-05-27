import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import AppRoutes from "../Routes";
import Header from "../Header";
import Footer from "../Footer";
import Sidebar from "../Sidebar";
import { getCategories } from "../../features/categories/categoriesSlice";
import { getProducts } from "../../features/products/productsSlice";

const App = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCategories());
        dispatch(getProducts());
    }, [dispatch])

    return (
        <div className="app">
            <Header />

            <div className="container">
                <Sidebar />
                <AppRoutes />
            </div>
            
            <Footer />
        </div>
    );
};

export default App;
