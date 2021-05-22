import React from 'react';
import Navbar from '../Home/Navbar';
import AddProducts from './AddProducts/AddProducts';
import './Dashboard.css'

const Dashboard = () => {
    return (
        <main>
            <Navbar></Navbar>
            <section className="container">
            <AddProducts></AddProducts>
            </section>
           
        </main>
    );
};

export default Dashboard;