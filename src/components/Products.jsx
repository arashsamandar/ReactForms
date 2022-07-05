import {Link, Route} from 'react-router-dom';
import React, {Component} from "react";
import Home from "./home";
import {Routes} from "react-router";
import ProductDetails from "./productDetails";


class Products extends Component {
    state = {
        products:[
            {id:1,name:'Product 1'},
            {id:2,name:'Product 2'},
            {id:3,name:'Product 3'},
        ]
    };
    render() {
        return (
            <div>
                {this.state.products.map(product => (<li key={product.id}><Link to={`/products/${product.id}`}>{product.name}</Link></li>))}
            </div>
        )
    }
}
export default Products;