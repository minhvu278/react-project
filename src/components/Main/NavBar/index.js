import React from 'react';

export default function Navbar() {
    return (
        // <main>
        //     {/* hero slider section start */}
        //     <section className="hero-slider">
        //         <div className="container">
        //             <div className="row">
        //                 <div className="col-12">
        //                     <div className="hero-slider-active slick-arrow-style slick-arrow-style_hero slick-dot-style">
        //                         {/* single slider item start */}
        //                         <div className="hero-single-slide">
        //                             <div className="hero-slider-item bg-img" data-bg="assets/img/slider/slider-1.jpg">
        //                                 <div className="hero-slider-content slide-1">
        //                                     <h5 className="slide-subtitle">Top Selling!</h5>
        //                                     <h2 className="slide-title">New Collection</h2>
        //                                     <p className="slide-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidid</p>
        //                                     <a href="shop.html" className="btn btn-hero">SHOP NOW</a>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                         {/* single slider item end */}
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </section>
        //     {/* hero slider section end */}
        //     {/* service features start */}
        //     <section className="service-policy-area">
        //         <div className="container">
        //             <div className="row">
        //                 {/* single policy item start */}
        //                 <div className="col-lg-4">
        //                     <div className="service-policy-item mt-30 bg-1">
        //                         <div className="policy-icon">
        //                             <img src="assets/img/icon/policy-1.png" alt="policy icon" />
        //                         </div>
        //                         <div className="policy-content">
        //                             <h5 className="policy-title">FREE SHIPPING</h5>
        //                             <p className="policy-desc">Free shipping on all order</p>
        //                         </div>
        //                     </div>
        //                 </div>
        //                 {/* single policy item start */}
        //                 {/* single policy item start */}
        //                 <div className="col-lg-4">
        //                     <div className="service-policy-item mt-30 bg-2">
        //                         <div className="policy-icon">
        //                             <img src="assets/img/icon/policy-2.png" alt="policy icon" />
        //                         </div>
        //                         <div className="policy-content">
        //                             <h5 className="policy-title">ONLINE SUPPORT</h5>
        //                             <p className="policy-desc">Online support 24 hours a day</p>
        //                         </div>
        //                     </div>
        //                 </div>
        //                 {/* single policy item start */}
        //                 {/* single policy item start */}
        //                 <div className="col-lg-4">
        //                     <div className="service-policy-item mt-30 bg-3">
        //                         <div className="policy-icon">
        //                             <img src="assets/img/icon/policy-3.png" alt="policy icon" />
        //                         </div>
        //                         <div className="policy-content">
        //                             <h5 className="policy-title">MONEY RETURN</h5>
        //                             <p className="policy-desc">Back guarantee under 5 days</p>
        //                         </div>
        //                     </div>
        //                 </div>
        //                 {/* single policy item start */}
        //             </div>
        //         </div>
        //     </section>
        //     {/* service features end */}
        //     {/* our product area start */}
        //     <section className="our-product section-padding">
        //         <div className="container">
        //             <div className="row">
        //                 <div className="col-12">
        //                     <div className="section-title text-center">
        //                         <h2 className="title">Our Product</h2>
        //                         <p className="sub-title">Lorem ipsum dolor sit amet consectetur adipisicing</p>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className="row">
        //                 <div className="col-6">
        //                     <div className="product-carousel-4 mbn-50 slick-row-15 slick-arrow-style">
        //                         {/* product single item start */}
        //                         <div className="product-item mb-50">
        //                             <div className="product-thumb">
        //                                 <a href="product-details.html">
        //                                     <img src="assets/img/product/product-1.jpg" alt="" />
        //                                 </a>
        //                             </div>
        //                             <div className="product-content">
        //                                 <h5 className="product-name">
        //                                     <a href="product-details.html">VU</a>
        //                                 </h5>
        //                                 <div className="price-box">
        //                                     <span className="price-regular">$80.00</span>
        //                                     <span className="price-old"><del>$70.00</del></span>
        //                                 </div>
        //                                 <div className="product-action-link">
        //                                     <a href="#" data-toggle="tooltip" title="Wishlist"><i className="ion-android-favorite-outline" /></a>
        //                                     <a href="#" data-toggle="tooltip" title="Add To Cart"><i className="ion-bag" /></a>
        //                                     <a href="#" data-toggle="modal" data-target="#quick_view"> <span data-toggle="tooltip" title="Quick View"><i className="ion-ios-eye-outline" /></span> </a>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                         {/* product single item start */}
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </section>
        //     {/* our product area end */}
        //     {/* banner statistic area start */}
        //     <div className="banner-statistics">
        //         <div className="container">
        //             <div className="row no-gutters mtn-30">
        //                 <div className="col-md-6">
        //                     <div className="img-container mt-30">
        //                         <a href="product-details.html">
        //                             <img src="assets/img/banner/banner-1.jpg" alt="banner-image" />
        //                         </a>
        //                         <div className="banner-text">
        //                             <h5 className="banner-subtitle">sports shoes</h5>
        //                             <h3 className="banner-title">20% Off<br />For Sports men</h3>
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div className="col-md-6">
        //                     <div className="img-container mt-30">
        //                         <a href="product-details.html">
        //                             <img src="assets/img/banner/banner-2.jpg" alt="banner-image" />
        //                         </a>
        //                         <div className="banner-text">
        //                             <h5 className="banner-subtitle">sports shoes</h5>
        //                             <h3 className="banner-title">20% Off<br />For Sports men</h3>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        //     {/* banner statistic area end */}
        //     {/* top seller area start */}
        //     <section className="top-seller-area section-padding">
        //         <div className="container">
        //             <div className="row">
        //                 <div className="col-12">
        //                     <div className="section-title text-center">
        //                         <h2 className="title">top seller</h2>
        //                         <p className="sub-title">Lorem ipsum dolor sit amet consectetur adipisicing</p>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className="row">
        //                 <div className="col-xl-4 col-lg-5 col-md-5">
        //                     <div className="product-banner">
        //                         <a href="#">
        //                             <img src="assets/img/banner/banner-3.jpg" alt="product banner" />
        //                         </a>
        //                     </div>
        //                 </div>
        //                 <div className="col-xl-8 col-lg-7 col-md-7">
        //                     <div className="top-seller-carousel slick-row-15 mtn-30">
        //                         {/* product item start */}
        //                         <div className="slide-item">
        //                             <div className="pro-item-small mt-30">
        //                                 <div className="product-thumb">
        //                                     <a href="product-details.html">
        //                                         <img src="assets/img/product/pro-small-1.jpg" alt="" />
        //                                     </a>
        //                                 </div>
        //                                 <div className="pro-small-content">
        //                                     <h6 className="product-name">
        //                                         <a href="product-details.html">Simple Fabric Shoe</a>
        //                                     </h6>
        //                                     <div className="price-box">
        //                                         <span className="price-regular">$80.00</span>
        //                                         <span className="price-old"><del>$70.00</del></span>
        //                                     </div>
        //                                     <div className="ratings">
        //                                         <span><i className="ion-android-star" /></span>
        //                                         <span><i className="ion-android-star" /></span>
        //                                         <span><i className="ion-android-star" /></span>
        //                                         <span><i className="ion-android-star" /></span>
        //                                         <span><i className="ion-android-star" /></span>
        //                                     </div>
        //                                     <div className="product-link-2">
        //                                         <a href="#" data-toggle="tooltip" title="Wishlist"><i className="ion-android-favorite-outline" /></a>
        //                                         <a href="#" data-toggle="tooltip" title="Add To Cart"><i className="ion-bag" /></a>
        //                                         <a href="#" data-toggle="modal" data-target="#quick_view"> <span data-toggle="tooltip" title="Quick View"><i className="ion-ios-eye-outline" /></span> </a>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                         {/* product item start */}
        //                         {/* product item start */}
        //                         <div className="slide-item">
        //                             <div className="pro-item-small mt-30">
        //                                 <div className="product-thumb">
        //                                     <a href="product-details.html">
        //                                         <img src="assets/img/product/pro-small-2.jpg" alt="" />
        //                                     </a>
        //                                 </div>
        //                                 <div className="pro-small-content">
        //                                     <h6 className="product-name">
        //                                         <a href="product-details.html">exclusive mens shoe</a>
        //                                     </h6>
        //                                     <div className="price-box">
        //                                         <span className="price-regular">$80.00</span>
        //                                         <span className="price-old"><del>$70.00</del></span>
        //                                     </div>
        //                                     <div className="ratings">
        //                                         <span><i className="ion-android-star" /></span>
        //                                         <span><i className="ion-android-star" /></span>
        //                                         <span><i className="ion-android-star" /></span>
        //                                         <span><i className="ion-android-star" /></span>
        //                                         <span><i className="ion-android-star" /></span>
        //                                     </div>
        //                                     <div className="product-link-2">
        //                                         <a href="#" data-toggle="tooltip" title="Wishlist"><i className="ion-android-favorite-outline" /></a>
        //                                         <a href="#" data-toggle="tooltip" title="Add To Cart"><i className="ion-bag" /></a>
        //                                         <a href="#" data-toggle="modal" data-target="#quick_view"> <span data-toggle="tooltip" title="Quick View"><i className="ion-ios-eye-outline" /></span> </a>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                         {/* product item start */}
        //                         {/* product item start */}
        //                         <div className="slide-item">
        //                             <div className="pro-item-small mt-30">
        //                                 <div className="product-thumb">
        //                                     <a href="product-details.html">
        //                                         <img src="assets/img/product/pro-small-3.jpg" alt="" />
        //                                     </a>
        //                                 </div>
        //                                 <div className="pro-small-content">
        //                                     <h6 className="product-name">
        //                                         <a href="product-details.html">Quickiin Mens shoes</a>
        //                                     </h6>
        //                                     <div className="price-box">
        //                                         <span className="price-regular">$80.00</span>
        //                                         <span className="price-old"><del>$70.00</del></span>
        //                                     </div>
        //                                     <div className="ratings">
        //                                         <span><i className="ion-android-star" /></span>
        //                                         <span><i className="ion-android-star" /></span>
        //                                         <span><i className="ion-android-star" /></span>
        //                                         <span><i className="ion-android-star" /></span>
        //                                         <span><i className="ion-android-star" /></span>
        //                                     </div>
        //                                     <div className="product-link-2">
        //                                         <a href="#" data-toggle="tooltip" title="Wishlist"><i className="ion-android-favorite-outline" /></a>
        //                                         <a href="#" data-toggle="tooltip" title="Add To Cart"><i className="ion-bag" /></a>
        //                                         <a href="#" data-toggle="modal" data-target="#quick_view"> <span data-toggle="tooltip" title="Quick View"><i className="ion-ios-eye-outline" /></span> </a>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                         {/* product item start */}
        //                         {/* product item start */}
        //                         <div className="slide-item">
        //                             <div className="pro-item-small mt-30">
        //                                 <div className="product-thumb">
        //                                     <a href="product-details.html">
        //                                         <img src="assets/img/product/pro-small-4.jpg" alt="" />
        //                                     </a>
        //                                 </div>
        //                                 <div className="pro-small-content">
        //                                     <h6 className="product-name">
        //                                         <a href="product-details.html">Primitive Men shoes</a>
        //                                     </h6>
        //                                     <div className="price-box">
        //                                         <span className="price-regular">$80.00</span>
        //                                         <span className="price-old"><del>$70.00</del></span>
        //                                     </div>
        //                                     <div className="ratings">
        //                                         <span><i className="ion-android-star" /></span>
        //                                         <span><i className="ion-android-star" /></span>
        //                                         <span><i className="ion-android-star" /></span>
        //                                         <span><i className="ion-android-star" /></span>
        //                                         <span><i className="ion-android-star" /></span>
        //                                     </div>
        //                                     <div className="product-link-2">
        //                                         <a href="#" data-toggle="tooltip" title="Wishlist"><i className="ion-android-favorite-outline" /></a>
        //                                         <a href="#" data-toggle="tooltip" title="Add To Cart"><i className="ion-bag" /></a>
        //                                         <a href="#" data-toggle="modal" data-target="#quick_view"> <span data-toggle="tooltip" title="Quick View"><i className="ion-ios-eye-outline" /></span> </a>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                         {/* product item start */}
        //                         {/* product item start */}
        //                         <div className="slide-item">
        //                             <div className="pro-item-small mt-30">
        //                                 <div className="product-thumb">
        //                                     <a href="product-details.html">
        //                                         <img src="assets/img/product/pro-small-2.jpg" alt="" />
        //                                     </a>
        //                                 </div>
        //                                 <div className="pro-small-content">
        //                                     <h6 className="product-name">
        //                                         <a href="product-details.html">Sports Mens shoes</a>
        //                                     </h6>
        //                                     <div className="price-box">
        //                                         <span className="price-regular">$80.00</span>
        //                                         <span className="price-old"><del>$70.00</del></span>
        //                                     </div>
        //                                     <div className="ratings">
        //                                         <span><i className="ion-android-star" /></span>
        //                                         <span><i className="ion-android-star" /></span>
        //                                         <span><i className="ion-android-star" /></span>
        //                                         <span><i className="ion-android-star" /></span>
        //                                         <span><i className="ion-android-star" /></span>
        //                                     </div>
        //                                     <div className="product-link-2">
        //                                         <a href="#" data-toggle="tooltip" title="Wishlist"><i className="ion-android-favorite-outline" /></a>
        //                                         <a href="#" data-toggle="tooltip" title="Add To Cart"><i className="ion-bag" /></a>
        //                                         <a href="#" data-toggle="modal" data-target="#quick_view"> <span data-toggle="tooltip" title="Quick View"><i className="ion-ios-eye-outline" /></span> </a>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                         {/* product item start */}
        //                         {/* product item start */}
        //                         <div className="slide-item">
        //                             <div className="pro-item-small mt-30">
        //                                 <div className="product-thumb">
        //                                     <a href="product-details.html">
        //                                         <img src="assets/img/product/pro-small-3.jpg" alt="" />
        //                                     </a>
        //                                 </div>
        //                                 <div className="pro-small-content">
        //                                     <h6 className="product-name">
        //                                         <a href="product-details.html">Quickiin Mens shoes</a>
        //                                     </h6>
        //                                     <div className="price-box">
        //                                         <span className="price-regular">$80.00</span>
        //                                         <span className="price-old"><del>$70.00</del></span>
        //                                     </div>
        //                                     <div className="ratings">
        //                                         <span><i className="ion-android-star" /></span>
        //                                         <span><i className="ion-android-star" /></span>
        //                                         <span><i className="ion-android-star" /></span>
        //                                         <span><i className="ion-android-star" /></span>
        //                                         <span><i className="ion-android-star" /></span>
        //                                     </div>
        //                                     <div className="product-link-2">
        //                                         <a href="#" data-toggle="tooltip" title="Wishlist"><i className="ion-android-favorite-outline" /></a>
        //                                         <a href="#" data-toggle="tooltip" title="Add To Cart"><i className="ion-bag" /></a>
        //                                         <a href="#" data-toggle="modal" data-target="#quick_view"> <span data-toggle="tooltip" title="Quick View"><i className="ion-ios-eye-outline" /></span> </a>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                         {/* product item start */}
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </section>
        //     {/* top seller area end */}
        //     {/* latest blog area start */}
        //     <section className="latest-blog-area">
        //         <div className="container">
        //             <div className="row">
        //                 <div className="col-12">
        //                     <div className="section-title text-center">
        //                         <h2 className="title">our blog</h2>
        //                         <p className="sub-title">Lorem ipsum dolor sit amet consectetur adipisicing</p>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className="row">
        //                 <div className="col-12">
        //                     <div className="blog-carousel-active slick-row-15">
        //                         {/* blog single item start */}
        //                         <div className="blog-post-item">
        //                             <div className="blog-thumb">
        //                                 <a href="blog-details.html">
        //                                     <img src="assets/img/blog/blog-1.jpg" alt="blog thumb" />
        //                                 </a>
        //                             </div>
        //                             <div className="blog-content">
        //                                 <h5 className="blog-title">
        //                                     <a href="blog-details.html">
        //                                         Celebrity Daughter Opens About to Having Her Eye color
        //                                     </a>
        //                                 </h5>
        //                                 <ul className="blog-meta">
        //                                     <li><span>By: </span>Admin,</li>
        //                                     <li><span>On: </span>14.07.2029</li>
        //                                 </ul>
        //                                 <a href="blog-details.html" className="read-more">Read More...</a>
        //                             </div>
        //                         </div>
        //                         {/* blog single item start */}
        //                         {/* blog single item start */}
        //                         <div className="blog-post-item">
        //                             <div className="blog-thumb">
        //                                 <a href="blog-details.html">
        //                                     <img src="assets/img/blog/blog-2.jpg" alt="blog thumb" />
        //                                 </a>
        //                             </div>
        //                             <div className="blog-content">
        //                                 <h5 className="blog-title">
        //                                     <a href="blog-details.html">
        //                                         Sotto Winner Offering Money To Any Man That Will Date Her
        //                                     </a>
        //                                 </h5>
        //                                 <ul className="blog-meta">
        //                                     <li><span>By: </span>Admin,</li>
        //                                     <li><span>On: </span>14.07.2029</li>
        //                                 </ul>
        //                                 <a href="blog-details.html" className="read-more">Read More...</a>
        //                             </div>
        //                         </div>
        //                         {/* blog single item start */}
        //                         {/* blog single item start */}
        //                         <div className="blog-post-item">
        //                             <div className="blog-thumb">
        //                                 <a href="blog-details.html">
        //                                     <img src="assets/img/blog/blog-3.jpg" alt="blog thumb" />
        //                                 </a>
        //                             </div>
        //                             <div className="blog-content">
        //                                 <h5 className="blog-title">
        //                                     <a href="blog-details.html">
        //                                         Children Left Home Alone For 4 Days In TV Series Experiment
        //                                     </a>
        //                                 </h5>
        //                                 <ul className="blog-meta">
        //                                     <li><span>By: </span>Admin,</li>
        //                                     <li><span>On: </span>14.07.2029</li>
        //                                 </ul>
        //                                 <a href="blog-details.html" className="read-more">Read More...</a>
        //                             </div>
        //                         </div>
        //                         {/* blog single item start */}
        //                         {/* blog single item start */}
        //                         <div className="blog-post-item">
        //                             <div className="blog-thumb">
        //                                 <a href="blog-details.html">
        //                                     <img src="assets/img/blog/blog-2.jpg" alt="blog thumb" />
        //                                 </a>
        //                             </div>
        //                             <div className="blog-content">
        //                                 <h5 className="blog-title">
        //                                     <a href="blog-details.html">
        //                                         People Are Willing Lie When To Comes Money Research from
        //                                     </a>
        //                                 </h5>
        //                                 <ul className="blog-meta">
        //                                     <li><span>By: </span>Admin,</li>
        //                                     <li><span>On: </span>14.07.2029</li>
        //                                 </ul>
        //                                 <a href="blog-details.html" className="read-more">Read More...</a>
        //                             </div>
        //                         </div>
        //                         {/* blog single item start */}
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </section>
        //     {/* latest blog area end */}
        //     {/* brand area start */}
        //     <div className="brand-area section-padding">
        //         <div className="container">
        //             <div className="row">
        //                 <div className="col-12">
        //                     <div className="brand-active-carousel">
        //                         <div className="brand-item">
        //                             <a href="#">
        //                                 <img src="assets/img/brand/br1.png" alt="brand image" />
        //                             </a>
        //                         </div>
        //                         <div className="brand-item">
        //                             <a href="#">
        //                                 <img src="assets/img/brand/br2.png" alt="brand image" />
        //                             </a>
        //                         </div>
        //                         <div className="brand-item">
        //                             <a href="#">
        //                                 <img src="assets/img/brand/br3.png" alt="brand image" />
        //                             </a>
        //                         </div>
        //                         <div className="brand-item">
        //                             <a href="#">
        //                                 <img src="assets/img/brand/br4.png" alt="brand image" />
        //                             </a>
        //                         </div>
        //                         <div className="brand-item">
        //                             <a href="#">
        //                                 <img src="assets/img/brand/br5.png" alt="brand image" />
        //                             </a>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        //     {/* brand area end */}
        // </main>
        <div>

        </div>
    )
}