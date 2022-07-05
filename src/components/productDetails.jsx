import React,{Component} from "react";
import {useParams} from 'react-router-dom';
import GetNav from "../common/utils";

const ProductDetails = () => {
    const params = useParams();
    return (
        <React.Fragment>
        <h3>Product Number - > {params.id} <GetNav address="help"/></h3>
        </React.Fragment>
        )
}
export default ProductDetails;
