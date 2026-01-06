import React from 'react';
import { User, Car, Bell, Shield, Phone, LogOut } from 'lucide-react';

const Section = ({ title, children }) => (
  <div className="mb-6">
    <h3 className="text-xs font-bold text-gray-400 tracking-wider mb-3 px-2">{title}</h3>
    <div className="bg-white rounded-2xl border border-gray-100 divide-y divide-gray-50 overflow-hidden">
      {children}
    </div>
  </div>
);

const Item = ({ icon: Icon, label, value, isDestructive }) => (
  <div className="p-4 flex items-center justify-between active:bg-gray-50">
     <div className="flex items-center gap-3">
       <div className={`p-2 rounded-lg ${isDestructive ? 'bg-red-50 text-red-500' : 'bg-gray-50 text-slate-600'}`}>
         <Icon className="w-5 h-5" />
       </div>
       <span className={`font-medium ${isDestructive ? 'text-red-500' : 'text-slate-700'}`}>{label}</span>
     </div>
     {value && <span className="text-sm text-gray-400">{value}</span>}
  </div>
);

const UserSettings = () => {


  return (
    <>
      <div className="px-5 pb-8">
         <Section title="Account">
           <Item icon={User} label="Profile" value="Ramesh" />
           <Item icon={Phone} label="Phone Number" value="+91 1234567890" />
           <Item icon={Car} label="My Vehicles" value="2 Cars" />
         </Section>

         <div className="mt-8">
           <button className="w-full bg-white border border-gray-200 text-red-500 font-bold py-4 rounded-xl shadow-sm flex items-center justify-center gap-2">
             <LogOut className="w-5 h-5" /> Log Out
           </button>
         </div>
      </div>
    </>
  );
};

export default UserSettings;
