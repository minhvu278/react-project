import React, {useState} from 'react';
import { Link} from 'react-router-dom';

export default function Home({products}) {
    const [basketNumbers, setBasketNumber] = useState(0)

    const addToBasket = () => {
        setBasketNumber(basketNumbers + 1)
    }
    return (
        <main>
            <section className="service-policy-area">
                <div className="container">
                    <div className="row">
                        {/* single policy item start */}
                        <div className="col-lg-4">
                            <div className="service-policy-item mt-30 bg-1">
                                <div className="policy-icon">
                                    <img src="assets/img/icon/policy-1.png" alt="policy icon" />
                                </div>
                                <div className="policy-content">
                                    <h5 className="policy-title">FREE SHIPPING</h5>
                                    <p className="policy-desc">Free shipping on all order</p>
                                </div>
                            </div>
                        </div>
                        {/* single policy item start */}
                        {/* single policy item start */}
                        <div className="col-lg-4">
                            <div className="service-policy-item mt-30 bg-2">
                                <div className="policy-icon">
                                    <img src="assets/img/icon/policy-2.png" alt="policy icon" />
                                </div>
                                <div className="policy-content">
                                    <h5 className="policy-title">ONLINE SUPPORT</h5>
                                    <p className="policy-desc">Online support 24 hours a day</p>
                                </div>
                            </div>
                        </div>
                        {/* single policy item start */}
                        {/* single policy item start */}
                        <div className="col-lg-4">
                            <div className="service-policy-item mt-30 bg-3">
                                <div className="policy-icon">
                                    <img src="assets/img/icon/policy-3.png" alt="policy icon" />
                                </div>
                                <div className="policy-content">
                                    <h5 className="policy-title">MONEY RETURN</h5>
                                    <p className="policy-desc">Back guarantee under 5 days</p>
                                </div>
                            </div>
                        </div>
                        {/* single policy item start */}
                    </div>
                </div>
            </section>
            {/* service features end */}
            {/* our product area start */}
            <section className="our-product section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-title text-center">
                                <h2 className="title">Our Product</h2>
                                <p className="sub-title">Lorem ipsum dolor sit amet consectetur adipisicing</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <h1>Curren in cart {basketNumbers}</h1>
                        <div className="col-6">
                            <div className="product-carousel-4 mbn-50 slick-row-15 slick-arrow-style">
                                {/* product single item start */}
                                {products.map(({id, name, image,price}, index) => (
                                    <div className="product-item mb-50">
                                        <div className="product-thumb">
                                            <Link to={`/details/${id}`}>
                                                <img src={image} alt="" />
                                            </Link>

                                        </div>
                                        <div className="product-content">
                                            <h5 className="product-name">
                                                <a href="product-details.html">{name}</a>
                                            </h5>
                                            <div className="price-box">
                                                <span className="price-regular">{price}</span>
                                                {/*<span className="price-old"><del>$70.00</del></span>*/}
                                            </div>
                                            <div className="product-action-link">
                                                <a href="#" data-toggle="tooltip" title="Wishlist"><i className="ion-android-favorite-outline" /></a>
                                                {/*<Link to="/details"> </Link>*/}
                                                <a onClick={addToBasket} href="#" data-toggle="tooltip" title="Add To Cart"><i className="ion-bag" /></a>
                                                <a  href="#" data-toggle="modal" data-target="#quick_view"> <span data-toggle="tooltip" title="Quick View"><i className="ion-ios-eye-outline" /></span> </a>

                                            </div>
                                        </div>
                                    </div>
                                ))}

                                {/* product single item start */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}