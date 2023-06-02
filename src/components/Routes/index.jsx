import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../Home";
import SingleProduct from "../SingleProduct";

import { ROUTES } from "../../utils/routes";

const AppRoutes = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path={ROUTES.PRODUCT} element={<SingleProduct />} />
        </Routes>
    );
};

export default AppRoutes;
