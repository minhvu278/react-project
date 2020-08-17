import React from 'react'
import PropTypes from 'prop-types'

const Header = props => {
    return (
        <header className="header-area">
            {/* main header start */}
            <div className="main-header d-none d-lg-block">
                {/* header top start */}
                <div className="header-top theme-bg">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="welcome-message">
                                    <p>Welcome to Vu online store</p>
                                </div>
                            </div>
                            <div className="col-lg-6 text-right">
                                <div className="header-top-settings">
                                    <ul className="nav align-items-center justify-content-end">
                                        <li className="curreny-wrap">
                                            $ Dollar (US)
                                            <i className="fa fa-angle-down" />
                                            <ul className="dropdown-list curreny-list">
                                                <li><a href="#">$ usd</a></li>
                                                <li><a href="#"> € EURO</a></li>
                                            </ul>
                                        </li>
                                        <li className="language">
                                            <img src="assets/img/icon/en.png" alt="flag" /> English
                                            <i className="fa fa-angle-down" />
                                            <ul className="dropdown-list">
                                                <li><a href="#"><img src="assets/img/icon/en.png" alt="flag" /> english</a></li>
                                                <li><a href="#"><img src="assets/img/icon/fr.png" alt="flag" /> french</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* header top end */}
                {/* header middle area start */}
                <div className="header-main-area sticky">
                    <div className="container">
                        <div className="row align-items-center position-relative">
                            {/* start logo area */}
                            <div className="col-lg-2">
                                <div className="logo">
                                    <a href="index.html">
                                        <img src="assets/img/logo/logo.png" alt="" />
                                    </a>
                                </div>
                            </div>
                            {/* start logo area */}
                            {/* main menu area start */}
                            <div className="col-lg-8 position-static">
                                <div className="main-menu-area">
                                    <div className="main-menu">
                                        {/* main menu navbar start */}
                                        <nav className="desktop-menu">
                                            <ul>
                                                <li className="active"><a href="index.html">Home <i className="fa fa-angle-down" /></a>
                                                    <ul className="dropdown">
                                                        <li><a href="index.html">Home version 01</a></li>
                                                        <li><a href="index-2.html">Home version 02</a></li>
                                                    </ul>
                                                </li>
                                                <li className="static"><a href="#">pages <i className="fa fa-angle-down" /></a>
                                                    <ul className="megamenu dropdown">
                                                        <li className="mega-title"><a href="#">column 01</a>
                                                            <ul>
                                                                <li><a href="shop.html">shop grid left
                                                                    sidebar</a></li>
                                                                <li><a href="shop-grid-right-sidebar.html">shop grid right
                                                                    sidebar</a></li>
                                                                <li><a href="shop-list-left-sidebar.html">shop list left sidebar</a></li>
                                                                <li><a href="shop-list-right-sidebar.html">shop list right sidebar</a></li>
                                                            </ul>
                                                        </li>
                                                        <li className="mega-title"><a href="#">column 02</a>
                                                            <ul>
                                                                <li><a href="product-details.html">product details</a></li>
                                                                <li><a href="product-details-affiliate.html">product details affiliate</a></li>
                                                                <li><a href="product-details-variable.html">product details variable</a></li>
                                                                <li><a href="product-details-group.html">product details group</a></li>
                                                            </ul>
                                                        </li>
                                                        <li className="mega-title"><a href="#">column 03</a>
                                                            <ul>
                                                                <li><a href="cart.html">cart</a></li>
                                                                <li><a href="checkout.html">checkout</a></li>
                                                                <li><a href="compare.html">compare</a></li>
                                                                <li><a href="wishlist.html">wishlist</a></li>
                                                            </ul>
                                                        </li>
                                                        <li className="mega-title"><a href="#">column 04</a>
                                                            <ul>
                                                                <li><a href="my-account.html">my-account</a></li>
                                                                <li><a href="login-register.html">login-register</a></li>
                                                                <li><a href="contact-us.html">contact us</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li><a href="shop.html">shop <i className="fa fa-angle-down" /></a>
                                                    <ul className="dropdown">
                                                        <li><a href="#">shop grid layout <i className="fa fa-angle-right" /></a>
                                                            <ul className="dropdown">
                                                                <li><a href="shop.html">shop grid left sidebar</a></li>
                                                                <li><a href="shop-grid-right-sidebar.html">shop grid right sidebar</a></li>
                                                                <li><a href="shop-grid-full-3-col.html">shop grid full 3 col</a></li>
                                                                <li><a href="shop-grid-full-4-col.html">shop grid full 4 col</a></li>
                                                            </ul>
                                                        </li>
                                                        <li><a href="#">shop list layout <i className="fa fa-angle-right" /></a>
                                                            <ul className="dropdown">
                                                                <li><a href="shop-list-left-sidebar.html">shop list left sidebar</a></li>
                                                                <li><a href="shop-list-right-sidebar.html">shop list right sidebar</a></li>
                                                                <li><a href="shop-list-full-width.html">shop list full width</a></li>
                                                            </ul>
                                                        </li>
                                                        <li><a href="#">products details <i className="fa fa-angle-right" /></a>
                                                            <ul className="dropdown">
                                                                <li><a href="product-details.html">product details</a></li>
                                                                <li><a href="product-details-affiliate.html">product details affiliate</a></li>
                                                                <li><a href="product-details-variable.html">product details variable</a></li>
                                                                <li><a href="product-details-group.html">product details group</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li><a href="blog-left-sidebar.html">Blog <i className="fa fa-angle-down" /></a>
                                                    <ul className="dropdown">
                                                        <li><a href="blog-left-sidebar.html">blog left sidebar</a></li>
                                                        <li><a href="blog-right-sidebar.html">blog right sidebar</a></li>
                                                        <li><a href="blog-grid-full-width.html">blog grid no sidebar</a></li>
                                                        <li><a href="blog-details.html">blog details</a></li>
                                                        <li><a href="blog-details-audio.html">blog details audio</a></li>
                                                        <li><a href="blog-details-video.html">blog details video</a></li>
                                                        <li><a href="blog-details-left-sidebar.html">blog details left sidebar</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="contact-us.html">Contact us</a></li>
                                            </ul>
                                        </nav>
                                        {/* main menu navbar end */}
                                    </div>
                                </div>
                            </div>
                            {/* main menu area end */}
                            {/* mini cart area start */}
                            <div className="col-lg-2">
                                <div className="header-configure-wrapper">
                                    <div className="header-configure-area">
                                        <ul className="nav justify-content-end">
                                            <li>
                                                <a href="#" className="offcanvas-btn">
                                                    <i className="ion-ios-search-strong" />
                                                </a>
                                            </li>
                                            <li className="user-hover">
                                                <a href="#">
                                                    <i className="ion-ios-gear-outline" />
                                                </a>
                                                <ul className="dropdown-list">
                                                    <li><a href="login-register.html">login</a></li>
                                                    <li><a href="login-register.html">register</a></li>
                                                    <li><a href="my-account.html">my account</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#" className="minicart-btn">
                                                    <i className="ion-bag" />
                                                    <div className="notification">2</div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* mini cart area end */}
                        </div>
                    </div>
                </div>
                {/* header middle area end */}
            </div>
            {/* main header start */}
            {/* mobile header start */}
            <div className="mobile-header d-lg-none d-md-block sticky">
                {/*mobile header top start */}
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12">
                            <div className="mobile-main-header">
                                <div className="mobile-logo">
                                    <a href="index.html">
                                        <img src="assets/img/logo/logo.png" alt="Brand Logo" />
                                    </a>
                                </div>
                                <div className="mobile-menu-toggler">
                                    <div className="mini-cart-wrap">
                                        <a href="cart.html">
                                            <i className="ion-bag" />
                                        </a>
                                    </div>
                                    <div className="mobile-menu-btn">
                                        <div className="off-canvas-btn">
                                            <i className="ion-navicon" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* mobile header top start */}
            </div>
            {/* mobile header end */}
        </header>
    )
}

Header.propTypes = {

}

export default Header
