import React,{Component} from "react";

class ProductDetails extends Component {
    handleSave = () => {

    };
    render() {
        return (
            <div>
                <h1>Product Details - </h1>
                <button onClick={this.handleSave}>Save</button>
            </div>
        )
    }
}
export default ProductDetails;
// {this.props.match.id}