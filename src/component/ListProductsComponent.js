import { Component } from "react";
import DataService from "../service/DataService";

class ListProductsComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            products: [],
            message: null
        }
        this.refreshProducts = this.refreshProducts.bind(this)
        
    }
    componentDidMount() {
        this.refreshProducts();
    }
    refreshProducts() {
        DataService.getProducts()
        .then(
            response => {
                console.log(response);
                this.setState({products: response.data})
            }
        )
    }
    render() {
        return (
            <div className="container">
                <h3>All Products</h3>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Unit Per Carton</th>
                                <th>Unit Price</th>
                                <th>Carton Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.products.map(
                                    product => 
                                    <tr>
                                    <td>{product.id}</td>
                                    <td>{product.productName}</td>
                                    <td>{product.unitType}</td>
                                
                                    </tr>
                                )
                            }
                            
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ListProductsComponent;

