import Dashboard from './components/Dashboard';
import Products from './components/Products';
import Posts from './components/Posts';
import Home from './components/home';
import {Route,BrowserRouter} from 'react-router-dom';
import React,{Component} from "react";
import {Routes} from "react-router-dom";
import {Link} from "react-router-dom";
import ProductDetails from "./components/productDetails";

class App extends Component {
    render() {
        return (
            <div>
                <Link to="/home">Home</Link><br></br>
                <Link to="/posts">Posts</Link><br></br>
                <Link to="/products">Products</Link><br></br>
                <Link to="/dashboard">Dashboard</Link><br></br>

                    <Routes>
                    <Route path="/products/:id" element={<ProductDetails />}/>
                    <Route path="/home" element={<Home />}/>
                    <Route path="/products"  element={<Products />}/>
                    <Route path="/dashboard" element={<Dashboard />}/>
                    <Route path="/posts" element={<Posts />}/>
                    </Routes>

            </div>
        )
    }
}
export default App;