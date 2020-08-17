import React, {useEffect, useState} from 'react';
import Axios from "axios";
import {useForm} from "react-hook-form";

const EditProduct1 = props => {
    let id = parseInt(props.match.params.id);
    const url = "http://localhost:3000/products";
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(url).then(res => res.json()).then((data) =>{
            setProducts(data)
        })
    }, [])
    const {register, handleSubmit, errors} = useForm();
    const Edit = data => {
        const urlUpdate = url + '/' + id;
        Axios.put(urlUpdate, data).then(res => {
            console.log(res.data)
            window.location = "../admin/products"

        })
    }
    return (
        <div className="content-wrapper">
            {/* Content Header (Page header) */}
            {/* Main content */}
            <section className="content">
                <div>Sửa sản phẩm</div>
                <div className="box row">
                    <div className="col-md-6">
                        <form onSubmit={handleSubmit(Edit)} encType="multipart/form-data">
                            {products.map(product => {
                                if (product.id === id){
                                    return (
                                        <div>
                                            <div className="form-group">
                                                <label htmlFor="name">Name</label>
                                                <input id="name" type="text" name="name" placeholder="Nhập tên "
                                                       className="form-control"
                                                       ref={register({required: true, minLength: 4, maxLength: 10})}/>
                                                {errors.name && errors.name.type === "required" && (
                                                    <div style={{color: 'red'}}>Tên không được để trống </div>)}
                                                {errors.name && errors.name.type === "minLength" && (
                                                    <div style={{color: 'red'}}>Ít nhất 4 ký tự </div>)}
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="short_detail">Image</label>
                                                <div>
                                                    <input className="form-control" id="image" placeholder="Nhập ảnh" name="image"
                                                           ref={register({required: true})}/>
                                                    {errors.image && <div style={{color: 'red'}}>Bạn chưa nhập ảnh </div>}

                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="short_detail">Price</label>
                                                <div>
                                                    <input className="form-control" id="price" placeholder="Nhập giá" name="price"
                                                           ref={register({
                                                               required: true,
                                                               min: 0,
                                                               pattern: /^[+-]?((\d+(\.\d*)?)|(\.\d+))$/
                                                           })}/>
                                                    {errors.price && errors.price.type === "required" && (
                                                        <div style={{color: 'red'}}>Vui lòng nhập vào giá </div>)}
                                                    {errors.price && errors.price.type === "pattern" && (
                                                        <div style={{color: 'red'}}>chỉ nhập số </div>)}

                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            })}

                            <div className="text-center">
                                <button type="submit" className="btn btn-sm btn-primary" name="submit">Lưu</button>
                                <button type="reset" value="Reset" className="btn btn-sm btn-danger">Hủy</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            {/* /.content */}
        </div>
    );
};

export default EditProduct1;
