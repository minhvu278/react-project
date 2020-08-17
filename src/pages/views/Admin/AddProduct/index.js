import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
// import { Editor } from '@tinymce/tinymce-react';
import firebase from '../../../../firebase'
const AddProduct = ({onAdd}) => {
    const {register, handleSubmit, errors} = useForm();
    let history = useHistory()
    const [desc, setDesc] = useState("");

    const onHandleSubmit = (data) => {
        let file = data.image[0];
        // tạo folder chứa ảnh trên firesbase
        let storageRef = firebase.storage().ref(`images/${file.name}`);
        // đẩy ảnh lên đường dẫn trên
        let uploadTask = storageRef.put(file);
        // thực hiện việc đầy ảnh lên firebase
        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED);

        // lấy ảnh từ Firebase
        firebase.storage().ref().child(`images/${file.name}`).getDownloadURL().then((url) => {
            // Tạo object mới chứa toàn bộ thông tin từ input
            const newData = {
                id: Math.random().toString(36).substr(2, 9),
                ...data,
                desc,
                image: url
            }
            // đẩy dữ liệu ra ngoài app.js thông qua props onAdd
            onAdd(newData)
        })
        history.push("/admin/products")
    }
    // const handleEditorChange = (content, editor) => {
    //     setDesc(content)
    // }
    return (
        <div className="content-wrapper">
            {/* Content Header (Page header) */}
            {/* Main content */}
            <section className="content">
                <div>Thêm sản phẩm</div>
                <div className="box row">
                    <div className="col-md-6">
                        <form onSubmit={handleSubmit(onHandleSubmit)} encType="multipart/form-data">
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
                                <label htmlFor="productPrice">Ảnh sản phẩm</label>
                                <div className="input-group">
                                    <div className="custom-file">
                                        <input type="file"
                                               className="custom-file-input"
                                               id="inputGroupFile02"
                                               name="image"
                                               ref={register}
                                        />
                                        <label className="custom-file-label" htmlFor="inputGroupFile02" aria-describedby="imageHelp">Choose image</label>
                                    </div>
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
                            {/*<div className="form-group">*/}
                            {/*    <label htmlFor="productDescription">Mô tả chi tiết sản phẩm</label>*/}
                            {/*    <Editor*/}
                            {/*        init={{*/}
                            {/*            height: 500,*/}
                            {/*            images_upload_url: 'postAcceptor.php',*/}
                            {/*            plugins: [*/}
                            {/*                'advlist autolink lists link image charmap print preview anchor',*/}
                            {/*                'searchreplace visualblocks code fullscreen',*/}
                            {/*                'insertdatetime media table paste code help wordcount'*/}
                            {/*            ],*/}
                            {/*            toolbar:*/}
                            {/*                'undo redo | formatselect | bold italic backcolor |  image link\*/}
                            {/*                alignleft aligncenter alignright alignjustify | \*/}
                            {/*                bullist numlist outdent indent | removeformat | help',*/}

                            {/*        }}*/}
                            {/*        onEditorChange={handleEditorChange}*/}
                            {/*    />*/}
                            {/*</div>*/}
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
AddProduct.propTypes = {
    onAdd: PropTypes.func
}

export default AddProduct;
