import React from 'react';
import { ArrowRight, Scan } from 'lucide-react';
import { Link } from 'react-router-dom';

const ActionCard = ({ title, description, icon: Icon, to, gradient, textColor = "text-white", iconBg = "bg-white/20 text-white" }) => {
  return (
    <Link to={to} className={`block p-6 rounded-2xl shadow-lg relative overflow-hidden ${gradient || 'bg-white'}`}>
       <div className="relative z-10 flex justify-between items-start">
         <div>
           <div className={`${iconBg} w-12 h-12 rounded-xl flex items-center justify-center mb-4 backdrop-blur-sm`}>
             <Icon className="w-6 h-6" />
           </div>
           <h3 className={`text-xl font-bold mb-1 ${textColor}`}>{title}</h3>
           <p className={`text-sm ${textColor} opacity-80`}>{description}</p>
         </div>
         <div className={`${iconBg} p-2 rounded-full backdrop-blur-sm`}>
           <ArrowRight className="w-5 h-5" />
         </div>
       </div>
    </Link>
  );
};

export default ActionCard;
