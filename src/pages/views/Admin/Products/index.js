import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
// import { useHistory } from "react-router-dom";

const ProductsManager = ({products, onRemove, productsPerPage, totalProducts}) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalProducts/productsPerPage); i++){
                pageNumbers.push(i)
            }
    const removeHandle = (id) => {
        onRemove(id)
    }
    // const Pagination = ({productsPerPage, totalProducts}) => {
    //     const pageNumbers = [];
    //
    //     for (let i = 1; i <= Math.ceil(totalProducts/productsPerPage); i++){
    //         pageNumbers.push(i)
    //     }
    //     return (
    //         <nav>
    //             <ul className="pagination">
    //                 {pageNumbers.map(number => (
    //                     <li key={number} className="page-item">
    //                         <a href="#" className="page-link">{number}</a>
    //                     </li>
    //                 ))}
    //             </ul>
    //         </nav>
    //     )
    // };


    return (
        <div className="content-wrapper">
            <Link to="/admin/products/add" className="btn btn-primary">Thêm sản phẩm</Link>
            <div className="card-body">
                {/* SEARCH FORM */}
                <form className="form-inline ml-3">
                    <div className="input-group input-group-sm">
                        <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
                        <div className="input-group-append">
                            <button className="btn btn-navbar" type="submit">
                                <i className="fas fa-search" />
                            </button>
                        </div>
                    </div>
                </form>
                <table id="example2" className="table table-bordered table-hover">
                    <thead>
                    <tr>
                        <th>STT</th>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {products.map(({id, name, image, price}, index) => (
                        <tr key={index}>
                            <th scope="row">{id}</th>
                            <td>{name}</td>
                            <td><img src={image} width="50px"/></td>
                            <td>{price}</td>
                            <td>
                                <Link exact className="btn btn-warning" to={`/admin/products/edit/${id}`}>Edit</Link>
                                <button className="btn btn-danger ml-3"
                                        onClick={() => removeHandle(id)}
                                        
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>

                </table>
                <nav>
                    <ul className="pagination">
                        {pageNumbers.map(number => (
                            <li key={number} className="page-item">
                                <a href="#" className="page-link">{number}</a>
                            </li>
                        ))}
                    </ul>
                </nav>re
            </div>
        </div>
    );
}

ProductsManager.propTypes = {
    products: PropTypes.array,
    onRemove: PropTypes.func
}

export default ProductsManager
