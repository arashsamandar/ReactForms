import Dashboard from './components/Dashboard';
import Products from './components/Products';
import Posts from './components/Posts';
import Home from './components/home';
import {Route, Navigate,Link,Redirect} from 'react-router-dom';
import React,{Component} from "react";
import ProductDetails from "./components/productDetails";
import NotFound from "./components/notFound";
import {Routes} from "react-router";

class App extends Component {
    render() {
        return (
            <div>
                <Link to="/">Home</Link><br></br>
                <Link to="/posts">Posts</Link><br></br>
                <Link to="/products">Products</Link><br></br>
                <Link to="/dashboard">Dashboard</Link><br></br>

                    <Routes>
                    <Route path="/products/:id" element={<ProductDetails />}/>
                    <Route path="/" exact element={<Home />}/>
                    <Route path="/products"  element={<Products />}/>
                    <Route path="/dashboard" element={<Dashboard />}/>
                    <Route path="/posts" element={<Posts />}/>
                    <Route path="/redirect" element={ <Navigate to="/not-found" /> } />
                    </Routes>
            </div>
        )
    }
}
export default App;