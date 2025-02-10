import { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const UserProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });
  const { user, logout } = useContext(AuthContext);

  const handleEdit = () => {
    setIsEditing(true);
    setFormData({
      firstName: user?.firstName || '',
      lastName: user?.lastName || '',
      email: user?.email || '',
      phone: user?.phone || ''
    });
  };

  const handleSave = () => {
    // Update user information
    console.log('Updated user information:', formData);
    setIsEditing(false);
  };

  return (
    <div className="container">
      <h1>My Profile</h1>
      
      <div className="profile-content">
        <div className="profile-info">
          <div className="profile-header">
            <h2>{user?.firstName} {user?.lastName}</h2>
            <button onClick={handleEdit} className="btn-secondary">
              {isEditing ? 'Cancel' : 'Edit Profile'}
            </button>
          </div>

          <div className="profile-details">
            <div className="form-group">
              <label>First Name</label>
              <input 
                type="text" 
                value={formData.firstName}
                onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                disabled={!isEditing}
              />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input 
                type="text" 
                value={formData.lastName}
                onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                disabled={!isEditing}
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input 
                type="email" 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                disabled={!isEditing}
              />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input 
                type="tel" 
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                disabled={!isEditing}
              />
            </div>
          </div>

          {isEditing && (
            <button onClick={handleSave} className="btn-primary">
              Save Changes
            </button>
          )}
        </div>

        <div className="profile-sections">
          <div className="order-history">
            <h3>Order History</h3>
            <div className="orders-list">
              {/* Order history will be displayed here */}
            </div>
          </div>

          <div className="saved-addresses">
            <h3>Saved Addresses</h3>
            <div className="addresses-list">
              {/* Saved addresses will be displayed here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;
