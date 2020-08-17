import React from 'react';
import PropTypes from 'prop-types';

Details.propTypes = {
    
};

function Details({products}) {
    return (
        <div className="product-details-wrapper section-padding">
            <div className="container custom-container">
                <div className="row">
                    <div className="col-12">
                        {/* product details inner end */}
                        {/*{products.map(({name, image,price}, index) => (*/}
                        <div className="product-details-inner">
                            <div className="row">
                                <div className="col-lg-5">
                                    <div className="product-large-slider mb-20">
                                        <div className="pro-large-img img-zoom">
                                            <img src={products.image} alt="" />
                                        </div>

                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="product-details-des">
                                        <h3 className="pro-det-title">{products.name}</h3>
                                        <div className="pro-review">
                                            <span><a href="#">1 Review(s)</a></span>
                                        </div>
                                        <div className="price-box">
                                            <span className="regular-price">$70.00</span>
                                            <span className="old-price"><del>$80.00</del></span>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                                            eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                                            voluptua.<br/>
                                            Phasellus id nisi quis justo tempus mollis sed et dui. In hac habitasse
                                            platea dictumst. Suspendisse ultrices mauris diam. Nullam sed aliquet elit.
                                            Mauris consequat nisi ut mauris efficitur lacinia.</p>
                                        <div className="quantity-cart-box d-flex align-items-center mb-20">
                                            <div className="quantity">
                                                <div className="pro-qty"><input type="text" defaultValue={1}/></div>
                                            </div>
                                            <a href="cart.html" className="btn btn-default">Add To Cart</a>
                                        </div>
                                        <div className="availability mb-20">
                                            <h5 className="cat-title">Availability:</h5>
                                            <span>In Stock</span>
                                        </div>
                                        <div className="share-icon">
                                            <h5 className="cat-title">Share:</h5>
                                            <a href="#"><i className="fa fa-facebook"/></a>
                                            <a href="#"><i className="fa fa-twitter"/></a>
                                            <a href="#"><i className="fa fa-pinterest"/></a>
                                            <a href="#"><i className="fa fa-google-plus"/></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*))}*/}
                        {/* product details inner end */}

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Details;