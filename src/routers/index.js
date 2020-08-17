import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LayoutMain from '../pages/layouts/LayoutMain'
import LayoutAdmin from '../pages/layouts/LayoutAdmin'
//Admin
import Dashboard from '../pages/views/Admin/Dashboard'
import ProductsManager from '../pages/views/Admin/Products'
import AddProduct from "../pages/views/Admin/AddProduct";

//Views
import About from '../pages/views/Main/About'
import Home from '../pages/views/Main/Home'
import EditProduct from "../pages/views/Admin/EditProduct";
import Details from "../pages/views/Main/Details";


const Routers = ({products, onRemove, onAdd, onUpdate, productsPage}) => {

    const onHandleRemove = (id) => {
        onRemove(id)
    }
    return (
        <Router>
            <Switch>
                <Route path="/admin/:path?/:path?/:path?" exact>
                    <LayoutAdmin>
                        <Switch>
                            <Route path='/admin' exact>
                                <Dashboard/>
                            </Route>
                            <Route exact path='/admin/products' render={(props) =>
                                <ProductsManager {...props} products={products} onRemove={onRemove} productsPerPage={productsPage} totalProducts={products.length}/>
                            }>

                            </Route>
                            <Route exact path='/admin/products/add' render={(props) =>
                                <AddProduct {...props} onAdd={onAdd}/>
                            }>

                            </Route>
                            <Route exact path='/admin/products/edit/:id'
                                   render={(props) =>
                                       <EditProduct {...props} products={products} onUpdate={onUpdate} />
                                   }
                            >
                            </Route>
                        </Switch>
                    </LayoutAdmin>
                </Route>
                <Route>
                    <LayoutMain>
                        <Switch>
                            <Route path="/" exact>
                                <Home products={products}/>
                            </Route>
                            <Route path="/details" exact>
                                <Details products={products}/>
                            </Route>
                            <Route>

                            </Route>
                            <Route path="/about">
                                <About/>
                            </Route>
                        </Switch>
                    </LayoutMain>
                </Route>
            </Switch>
        </Router>
    )
}

Routers.propTypes = {}

export default Routers
