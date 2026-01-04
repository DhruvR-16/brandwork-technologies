import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import UserHome from './pages/UserHome';
import UserHistory from './pages/UserHistory';
import UserSettings from './pages/UserSettings';
import ScanPage from './pages/ScanPage';
import ManagerDashboard from './pages/ManagerDashboard';
import DriverDashboard from './pages/DriverDashboard';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  const [role, setRole] = useState('user');
  const [activeParking, setActiveParking] = useState(null);

  return (
    <BrowserRouter>
      <MainLayout role={role} setRole={setRole}>
        <Routes>
          {role === 'user' && (
            <>
              <Route path="/" element={<UserHome activeParking={activeParking} />} />
              <Route path="/history" element={<UserHistory />} />
              <Route path="/settings" element={<UserSettings />} />
              <Route path="/scan" element={<ScanPage setActiveParking={setActiveParking} />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </>
          )}

          {role === 'manager' && (
            <>
              <Route path="/manager" element={<ManagerDashboard />} />
              <Route path="*" element={<Navigate to="/manager" replace />} />
            </>
          )}

          {role === 'driver' && (
            <>
              <Route path="/driver" element={<DriverDashboard />} />
              <Route path="*" element={<Navigate to="/driver" replace />} />
            </>
          )}
          
          {role === 'admin' && (
            <>
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="*" element={<Navigate to="/admin" replace />} />
            </>
          )}
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;