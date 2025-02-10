import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div className="container">
      <h1>Admin Dashboard</h1>
      
      <div className="dashboard-nav">
        <Link to="/admin/products">Manage Products</Link>
        <Link to="/admin/blog">Manage Blog Posts</Link>
        <Link to="/admin/orders">View Orders</Link>
        <Link to="/admin/users">Manage Users</Link>
      </div>
    </div>
  );
};

export default AdminDashboard;
