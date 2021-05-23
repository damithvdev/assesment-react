import React, { useState, useEffect } from "react";
import ProductSelector from "./ProductSelector";
import CartProducts from "./CartProducts";
import CartPriceDisplay from "./CartPriceDisplay";
import DataService from "../service/DataService";

const Cart = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const productCat = ["Penguine-ears", "Horseshoe"];
  const filterData = ["units", "carton"];
  const [total, setTotal] = useState(0);

  const calculateTotal = (data) => {
    DataService.getTotal(data).then((response) => {
      setTotal(response.data);
    });
  };

  useEffect(() => {
    calculateTotal(selectedItems);
  }, [selectedItems]);
  const onChangeHandle = (item) => {
    setSelectedItems([...selectedItems, item]);
  };

  return (
    <>
      <ProductSelector productCat={productCat} filterData={filterData} onAddPenguine={onChangeHandle} />
      <CartProducts items={selectedItems} />
      <CartPriceDisplay total={total} />
    </>
  );
};

export default Cart;
