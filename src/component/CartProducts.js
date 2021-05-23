import React from "react";
const CartProducts = (props) => {
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
            {props.items.map((item) => (
              <tr>
                <td>{item.name}</td>
                <td>{item.type}</td>
                <td>{item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CartProducts;
