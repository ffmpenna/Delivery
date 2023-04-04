import React, { useContext } from 'react';
import MyContext from '../context/MyContext';
import NavBar from '../Components/NavBar';
import OrderCard from '../Components/OrderCard';
import { navBarCustomer, navBarSeller } from '../utils/navBarinfo';

function Order() {
  const { role } = JSON.parse(localStorage.getItem('user'));
  const typeNav = role === 'seller' ? navBarSeller : navBarCustomer[1];
  const { getOrders } = useContext(MyContext);
  const orderList = getOrders(role);
  const orders = orderList.map((item, index) => {
    const { id, status, saleDate, totalPrice, deliveryAddress } = item;
    return (
      <OrderCard
        key={ index }
        prop={ role }
        id={ id }
        status={ status }
        saleDate={ saleDate }
        totalPrice={ totalPrice }
        deliveryAddress={ deliveryAddress }
      />
    );
  });
  return (
    <div>
      <NavBar type={ typeNav } />
      <ul>{orders}</ul>
    </div>
  );
}

export default Order;
