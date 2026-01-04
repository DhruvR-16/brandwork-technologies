import React from 'react';

const RoleSwitcher = ({ currentRole, setRole }) => {
  const roles = [
    { id: 'user', label: 'User' },
    { id: 'manager', label: 'Manager' },
    { id: 'driver', label: 'Driver' },
    { id: 'admin', label: 'Super Admin' },
  ];

  return (
    <div className="fixed bottom-8 right-8 bg-white p-2 rounded-2xl border border-gray-100 z-50 flex gap-1 shadow-lg">
      {roles.map((role) => (
        <button
          key={role.id}
          onClick={() => setRole(role.id)}
          className={`px-4 py-2 rounded-xl text-sm font-bold transition-colors ${
            currentRole === role.id 
              ? 'bg-indigo-600 text-white' 
              : 'text-gray-500 hover:bg-gray-50'
          }`}
        >
          {role.label}
        </button>
      ))}
    </div>
  );
};

export default RoleSwitcher;
