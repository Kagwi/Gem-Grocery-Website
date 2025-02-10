import { useState } from 'react';

const OrderManagement = () => {
  const [orders, setOrders] = useState([
    {
      id: 1,
      customer: 'John Doe',
      status: 'pending',
      total: 100
    }
  ]);

  const handleStatusUpdate = (orderId, newStatus) => {
    setOrders(prevOrders => 
      prevOrders.map(order => 
        order.id === orderId ? { ...order, status: newStatus } : order
      )
    );
  };

  return (
    <div className="container">
      <h1>Order Management</h1>
      
      <div className="orders-list">
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Status</th>
              <th>Total</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.customer}</td>
                <td>
                  <select 
                    value={order.status}
                    onChange={(e) => handleStatusUpdate(order.id, e.target.value)}
                  >
                    <option value="pending">Pending</option>
                    <option value="processing">Processing</option>
                    <option value="shipped">Shipped</option>
                    <option value="delivered">Delivered</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </td>
                <td>${order.total}</td>
                <td>
                  <button className="btn-secondary">View Details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderManagement;
