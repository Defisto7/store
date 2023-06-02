import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { filterByPrice } from "../../features/products/productsSlice";

import Poster from "../Poster";
import Banner from "../Banner";
import Categories from "../Categories";
import Products from "../Products";

const Home = () => {
    const { products: {list, filtered}, categories } = useSelector((state) => state);
    const dispatch = useDispatch();

    useEffect(() => {
      if (!list.length) return

      dispatch(filterByPrice(100))
    }, [dispatch, list.length]);

    return (
        <>
            <Poster />
            <Products products={list} amount={5} title="Trending" />
            <Categories products={categories.list} amount={5} title="Worth seeing" />
            <Banner />
            <Products products={filtered} amount={5} title="Less than 100$" />
        </>
    );
};

export default Home;
