import React, { useState, useEffect } from 'react';
import axiosInstance from './AxiosConfig';

const fetchProducts = async () => {
    try {
        const response = await axiosInstance.get("http://20.244.56.144/test/companies/AMZ/categories/Laptop/products?top=10&minPrice=1&maxPrice=10000");
        return response.data;
    } catch (error) {
        console.log(error);
        return [];
    }
};

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            const data = await fetchProducts();
            setProducts(data);
        };

        getProducts();
    }, []);

    return (
        <div className='flex flex-col'>
            <p className='text-blue-800 font-bold'>Amazon Products</p>
            <ul>
                {products.map((product, index) => (
                    <li key={index}>{JSON.stringify(product)}</li>
                ))}
            </ul>
        </div>
    );
};

export default Products;
