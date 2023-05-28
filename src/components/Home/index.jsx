import React from "react";
import Poster from "../Poster";
import Products from "../Products";
import { useSelector } from "react-redux";
import Categories from "../Categories";
import Banner from "../Banner";

const Home = () => {
    const { products, categories } = useSelector((state) => state);

    return (
        <>
            <Poster />
            <Products products={products.list} amount={5} title="Trending" />
            <Categories products={categories.list} amount={5} title="Worth seeing" />
            <Banner />
        </>
    );
};

export default Home;
