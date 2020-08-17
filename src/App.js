import React, {useEffect, useState} from 'react';
import apiRequest from './api/productApi'
import Routers from './routers'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

// import AddProduct from './components/AddProduct';
function App() {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage, setProductsPerPage] = useState(10);
    //Danh sach
    useEffect(() => {
        const getProducts = async () => {
            try {
                const { data } = await apiRequest.getAll();
                setProducts(data);
            } catch (error) {
                console.log('failed to request API: ', error)
            }
        }
        getProducts();
    }, []);

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct)

    //Add
    const onHandleAdd = async (product) => {
        try{
            const {data} = await apiRequest.create(product)
            setProducts([
                ...products,
                data
            ])
        }catch (e) {
            console.log("Failed", e)
        }
    }

    //Update

    const onHandleUpdate = async (id, updateProduct) => {
            const {data} = await apiRequest.update(id,updateProduct)
            setProducts([
                ...products,
                data
            ])

    }

    // const onHandleUpdate = (updateProduct) => {
    //     const newProducts = products.map(product => (
    //         product.id === updateProduct.id ? updateProduct : product
    //     ))
    //     localStorage.setItem('products', JSON.stringify(newProducts))
    //     setProducts(newProducts)
    // }

    const onHandleRemove = async (id) => {
        try {
            const { data } = await apiRequest.remove(id);
            const newProducts = products.filter(product => product.id !== data.id);
            setProducts(newProducts);
        } catch (error) {
            console.log('failed to request API: ', error)
        }

    }

    return (
        <div className="App">
            <Routers products={currentProducts}
                     productsPerPage={productsPerPage}
                     onAdd={onHandleAdd}
                     onUpdate={onHandleUpdate}
                     onRemove={onHandleRemove}
            />
        </div>
    )

}

export default App;