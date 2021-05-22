import React, { useEffect, useState } from 'react';
import SinglePdCard from '../SinglePdCard';

import './Home.css'
import Navbar from './Navbar';
const Home = () => {

    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5500/allProducts')
            .then(res => res.json())
            .then(result => {
                setProducts(result)
            })
    }, [])


    return (
        <div>
            <Navbar></Navbar> 
            <section className="container mt-5">
                <div className="row">
                    {
                        products.map(product => <SinglePdCard key={product._id} product={product}></SinglePdCard>)
                    }
                </div>

            </section>

        </div>
    );
};

export default Home;