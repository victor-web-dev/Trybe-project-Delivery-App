import React from 'react';
import { useHistory } from 'react-router-dom';
import './style.css';

const NavBar = () => {
  const history = useHistory();

  const { name, role } = JSON.parse(localStorage.getItem('user'));

  const Products = (
    <button
      data-testid="customer_products__element-navbar-link-products"
      onClick={ history.push('/customer/products') }
      type="button"
    >
      PRODUTOS
    </button>
  );

  const MyOrders = (
    <button
      data-testid="customer_products__element-navbar-link-orders"
      onClick={ history.push('/customer/orders') }
      type="button"
    >
      MEUS PEDIDOS
    </button>
  );

  const ManageOrders = (
    <button
      data-testid="customer_products__element-navbar-link-orders"
      onClick={ history.push('/seller/orders') }
      type="button"
    >
      PEDIDOS
    </button>
  );

  const ManageUsers = (
    <button
      data-testid="customer_products__element-navbar-link-orders"
      type="button"
    >
      GERENCIAR USUÁRIOS
    </button>
  );

  return (
    <div className="nav-bar">
      { role === 'customer' && <MyOrders /> && <Products /> }
      { role === 'seller' && <ManageOrders /> }
      { role === 'admin' && <ManageUsers /> }
      <div className="user-name">
        <span
          data-testid="customer_products__element-navbar-user-full-name"
        >
          { name }
        </span>
      </div>
      <button
        data-testid="customer_products__element-navbar-link-logout"
        type="button"
      >
        Sair
      </button>
    </div>
  );
};

export default NavBar;