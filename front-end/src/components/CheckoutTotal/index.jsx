import React, { useEffect, useState } from 'react';
import Proptypes from 'prop-types';

const CheckoutTotal = (props) => {
  const { products } = props;
  const [totalPriceCheckout, setTotalPrice] = useState(0);

  const updateLocalStorageTotalPrice = (price) => {
    const prevData = JSON.parse(localStorage.getItem('carrinho'));
    prevData.totalPrice = price;
    localStorage.setItem('carrinho', JSON.stringify(prevData));
  };

  useEffect(() => {
    const calculateTotalPrice = () => {
      let total = 0;
      products.forEach((e) => {
        const { quantity, price } = e;
        total += quantity * parseFloat(price);
      });
      setTotalPrice(total.toFixed(2));
      updateLocalStorageTotalPrice(total.toFixed(2));
    };
    calculateTotalPrice();
  }, [products]);

  return (
    <button
      htmlFor=""
      type="button"
      data-testid="customer_checkout__element-order-total-price"
    >
      Total: R$
      {(totalPriceCheckout).toString().replace('.', ',')}
    </button>
  );
};

CheckoutTotal.propTypes = {
  products: Proptypes.arrayOf(Proptypes.shape({
    id: Proptypes.number,
    quantity: Proptypes.number,
    price: Proptypes.string,
    name: Proptypes.string,
  })).isRequired,
};

export default CheckoutTotal;
