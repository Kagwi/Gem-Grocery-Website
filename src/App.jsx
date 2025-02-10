import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminDashboard from './pages/AdminDashboard';
import ProductManagement from './pages/ProductManagement';
import BlogManagement from './pages/BlogManagement';
import OrderManagement from './pages/OrderManagement';

// Previous imports remain the same

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <WishlistProvider>
          <Router>
            <div className="app">
              <Navbar />
              <main className="main-content">
                <Routes>
                  {/* Previous routes remain the same */}
                  
                  {/* Admin Routes */}
                  <Route path="/admin" element={<AdminDashboard />} />
                  <Route path="/admin/products" element={<ProductManagement />} />
                  <Route path="/admin/blog" element={<BlogManagement />} />
                  <Route path="/admin/orders" element={<OrderManagement />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </Router>
        </WishlistProvider>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
