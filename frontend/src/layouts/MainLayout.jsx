import React from 'react';
import BottomNav from '../components/BottomNav';
import RoleSwitcher from '../components/RoleSwitcher';

const MainLayout = ({ children, role, setRole }) => {
  return (
    <div className="fixed inset-0 bg-red-100 flex items-center justify-center p-4 font-sans">
      <div className="w-full max-w-[375px] h-[812px] bg-white relative shadow-2xl rounded-[3rem] border-[8px] border-slate-900 overflow-hidden flex flex-col ring-8 ring-slate-900/5">
        <main className="flex-1 overflow-y-auto pb-[77px] scrollbar-hide">
          {children}
        </main>
        
        <BottomNav role={role} />
      </div>
      <RoleSwitcher currentRole={role} setRole={setRole} />
    </div>
  );
};

export default MainLayout;
