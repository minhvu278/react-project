import React, {useState} from 'react';
import {useHistory, useParams} from "react-router";
import Axios from "axios";
import {useForm} from "react-hook-form";

const EditProduct = ({products, onUpdate}) => {
    const {register,handleSubmit, errors} = useForm();
    let {id} = useParams();
    let history = useHistory();
    const product = products.find(product => product.id === id);

    // const [currenProduct, setCurrentProduct] = useState(product);

    const onHandleSubmit = (data) => {
        const newData = {
            id,
            ...data,
        }
        onUpdate(newData)
        // console.log(newData)
        history.push('/admin/products')
    }

    return (
        <div className="content-wrapper">
            {/* Content Header (Page header) */}
            {/* Main content */}
            <section className="content">
                <div>Sửa sản phẩm</div>
                <div className="box row">
                    <div className="col-md-6">
                        <form onSubmit={handleSubmit(onHandleSubmit)} encType="multipart/form-data">
                            <div>
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input id="name" type="text" name="name" placeholder="Nhập tên "
                                           className="form-control"
                                           defaultValue={product.name}
                                           ref={register({required: true, minLength: 4, maxLength: 10})}/>
                                    {errors.name && errors.name.type === "required" && (
                                        <div style={{color: 'red'}}>Tên không được để trống </div>)}
                                    {errors.name && errors.name.type === "minLength" && (
                                        <div style={{color: 'red'}}>Ít nhất 4 ký tự </div>)}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="short_detail">Price</label>
                                    <div>
                                        <input className="form-control"
                                               defaultValue={product.price}
                                               id="price"
                                               placeholder="Nhập giá"
                                               name="price"
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
                            <div className="text-center">
                                <button type="submit" className="btn btn-sm btn-primary" name="submit">Cập nhật</button>
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

export default EditProduct;
