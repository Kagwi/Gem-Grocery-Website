import { Link, Route, Routes } from 'react-router-dom';
import AccountDashboard from './AccountDashboard';
import OrderHistory from './OrderHistory';
import SavedAddresses from './SavedAddresses';
import AccountDetails from './AccountDetails';
import UserProfilePage from './UserProfilePage';

const AccountPage = () => {
  return (
    <div className="container">
      <h1>My Account</h1>
      
      <div className="account-nav">
        <Link to="/account/dashboard">Dashboard</Link>
        <Link to="/account/orders">Orders</Link>
        <Link to="/account/addresses">Addresses</Link>
        <Link to="/account/profile">Profile</Link>
      </div>

      <Routes>
        <Route path="/dashboard" element={<AccountDashboard />} />
        <Route path="/orders" element={<OrderHistory />} />
        <Route path="/addresses" element={<SavedAddresses />} />
        <Route path="/profile" element={<UserProfilePage />} />
      </Routes>
    </div>
  );
};

export default AccountPage;
