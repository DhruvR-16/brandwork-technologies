import React from 'react';
import BottomNav from '../components/BottomNav';
import RoleSwitcher from '../components/RoleSwitcher';

const MainLayout = ({ children, role, setRole }) => {
  return (
    <div className="fixed inset-0 bg-white-100 flex items-center justify-center p-4">
      <div className="w-full max-w-[375px] h-[812px] bg-white relative rounded-[3rem] border-[8px] border-slate-900 overflow-hidden flex flex-col">
        <main className="flex-1 overflow-y-auto pb-[77px]">
          {children}
        </main>
        
        <BottomNav role={role} />
      </div>
      <RoleSwitcher currentRole={role} setRole={setRole} />
    </div>
  );
};

export default MainLayout;
