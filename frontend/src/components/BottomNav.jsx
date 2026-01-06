import React from 'react';
import { Home, History, Ticket, Settings, LayoutDashboard, Car, Users, Activity } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const NavItem = ({ to, icon: Icon, label }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link to={to} className={`flex flex-col items-center gap-1.5 transition-colors ${isActive ? 'text-indigo-600' : 'text-gray-400 hover:text-gray-500'}`}>
      <Icon className={`w-6 h-6 ${isActive ? 'stroke-[2.5px]' : 'stroke-2'}`} />
      <span className="text-[10px] font-semibold tracking-wide">{label}</span>
      {isActive && <div className="absolute top-0 w-12 h-1 bg-indigo-600 rounded-b-lg shadow-sm shadow-indigo-200"></div>}
    </Link>
  );
};

const BottomNav = ({ role }) => {
  return (
    <nav className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 h-[77px] px-8 flex justify-between items-center w-full z-30 pb-2">
      {role === 'user' && (
        <>
          <NavItem to="/" icon={Home} label="Home" />
          <NavItem to="/ticket" icon={Ticket} label="Ticket" />
          <NavItem to="/history" icon={History} label="History" />
          <NavItem to="/settings" icon={Settings} label="Settings" />
        </>
      )}

      
      {role === 'admin' && (
         <>
           <NavItem to="/admin" icon={LayoutDashboard} label="Overview" />
           <NavItem to="/admin/analytics" icon={Activity} label="Analytics" />
        </>
      )}
    </nav>
  );
};

export default BottomNav;
