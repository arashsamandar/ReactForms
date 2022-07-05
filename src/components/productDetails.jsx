import React,{Component} from "react";
import {useParams} from 'react-router-dom';

const ProductDetails = () => {
    const params = useParams();
    return <h3>Product Number - > {params.id}</h3>;
}
export default ProductDetails;