import React, { useState } from 'react';
import { ArrowLeft, MapPin, Ticket, IndianRupee, Calendar, TrendingUp, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isSiteMenuOpen, setIsSiteMenuOpen] = useState(false);
  
  const [data, setData] = useState({
    name: 'Phoenix Mall - Lower Parel',
    todayTickets: 87,
    todayCollection: '13,050',
    todayActive: 12,
    overallTickets: '1,247',
    overallCollection: '1,86,450',
    overallActive: 45,
    growth: '+12%',
    revGrowth: '+8.5%'
  });

  const [selectedId, setSelectedId] = useState('phoenix');

  const handleSiteSelect = (id) => {
    setSelectedId(id);
    setIsSiteMenuOpen(false);

    if (id === 'phoenix') {
      setData({
        name: 'Phoenix Mall - Lower Parel',
        todayTickets: 87,
        todayCollection: '13,050',
        todayActive: 12,
        overallTickets: '1,247',
        overallCollection: '1,86,450',
        overallActive: 45,
        growth: '+12%',
        revGrowth: '+8.5%'
      });
    } else if (id === 'inorbit') {
      setData({
        name: 'Inorbit Mall - Malad',
        todayTickets: 64,
        todayCollection: '9,600',
        todayActive: 8,
        overallTickets: '892',
        overallCollection: '1,33,800',
        overallActive: 32,
        growth: '+5%',
        revGrowth: '+4.2%'
      });
    } else if (id === 'infiniti') {
      setData({
        name: 'Infiniti Mall - Andheri',
        todayTickets: 72,
        todayCollection: '10,800',
        todayActive: 10,
        overallTickets: '1,056',
        overallCollection: '1,58,400',
        overallActive: 38,
        growth: '+8%',
        revGrowth: '+6.1%'
      });
    }
  };

  return (
    <div className="bg-gray-50 min-h-full">
      <div className="bg-indigo-700 text-white pt-8 pb-8 px-6 relative z-10">
        <div className="flex items-center gap-3 mb-1">
          <Link to="/" className="p-2 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-xl transition-colors">
            <ArrowLeft className="w-5 h-5 text-white" />
          </Link>
          <div>
            <h1 className="text-xl font-bold">Super Admin</h1>
            <p className="text-indigo-200 text-xs font-medium">System overview and approvals</p>
          </div>
        </div>
      </div>

      <div className="-mt-6 px-6 relative z-20 pb-20">

        <div className="bg-white p-1 rounded-xl gap-2 flex mx-auto shadow-sm border border-gray-100 mb-6">
          <button 
            onClick={() => setActiveTab('overview')}
            className={`flex-1 py-2.5 text-xs font-bold tracking-wide rounded-lg transition-all ${activeTab === 'overview' ? 'bg-indigo-600 text-white shadow-md transform scale-[1.02]' : 'text-slate-500 hover:bg-gray-50'}`}
          >
            Overview
          </button>
          <button 
             onClick={() => setActiveTab('approvals')}
             className={`flex-1 py-2.5 text-xs font-bold tracking-wide rounded-lg transition-all ${activeTab === 'approvals' ? 'bg-indigo-600 text-white shadow-md transform scale-[1.02]' : 'text-slate-500 hover:bg-gray-50'}`}
          >
            Approvals
          </button>
        </div>


         <div className="mb-6 relative">
           <button 
             onClick={() => setIsSiteMenuOpen(!isSiteMenuOpen)}
             className="w-full bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between active:scale-[0.98] transition-all"
            >
             <div className="flex items-center gap-3 text-left">
               <div className="bg-indigo-50 p-2.5 rounded-xl text-indigo-600">
                 <MapPin className="w-5 h-5" />
               </div>
               <div>
                 <p className="text-xs text-gray-400 font-medium mb-0.5">Select Site</p>
                 <h3 className="text-slate-800 font-bold text-sm">{data.name}</h3>
               </div>
             </div>
             <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${isSiteMenuOpen ? 'rotate-180' : ''}`} />
           </button>

           {isSiteMenuOpen && (
             <div className="absolute top-full left-0 right-0 mt-2 bg-[#ffffff] rounded-2xl shadow-xl border border-gray-200 z-50 overflow-hidden">
                <button
                   onClick={() => handleSiteSelect('phoenix')}
                   className={`w-full p-4 text-left text-sm font-bold border-b border-gray-100 hover:bg-gray-50 transition-colors ${selectedId === 'phoenix' ? 'text-indigo-600 bg-indigo-50' : 'text-[#000000]'}`}
                 >
                   Phoenix Mall - Lower Parel
                 </button>
                 <button
                   onClick={() => handleSiteSelect('inorbit')}
                   className={`w-full p-4 text-left text-sm font-bold border-b border-gray-100 hover:bg-gray-50 transition-colors ${selectedId === 'inorbit' ? 'text-indigo-600 bg-indigo-50' : 'text-[#000000]'}`}
                 >
                   Inorbit Mall - Malad
                 </button>
                 <button
                   onClick={() => handleSiteSelect('infiniti')}
                   className={`w-full p-4 text-left text-sm font-bold hover:bg-gray-50 transition-colors ${selectedId === 'infiniti' ? 'text-indigo-600 bg-indigo-50' : 'text-[#000000]'}`}
                 >
                   Infiniti Mall - Andheri
                 </button>
             </div>
           )}
         </div>

         {activeTab === 'overview' && (
           <>

             <div className="mb-6">
               <div className="flex items-center gap-2 mb-4 px-1">
                 <Calendar className="w-4 h-4 text-slate-400" />
                 <h2 className="text-sm font-bold text-slate-500 tracking-wider">Today's Performance</h2>
               </div>
               
               <div className="grid grid-cols-2 gap-4">
                 <div className="bg-white p-5 rounded-[1.5rem] shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center">
                   <p className="text-3xl font-black text-slate-800 mb-1">{data.todayTickets}</p>
                   <span className="text-[10px] font-bold text-slate-400 tracking-wide">Tickets Issued</span>
                 </div>
                 <div className="bg-white p-5 rounded-[1.5rem] shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center">
                  <p className="text-3xl font-black text-emerald-500 mb-1">₹{data.todayCollection}</p>
                  <span className="text-[10px] font-bold text-slate-400 tracking-wide">Collection</span>
                 </div>
               </div>
             </div>


             <div>
                <div className="flex items-center gap-2 mb-4 px-1">
                 <TrendingUp className="w-4 h-4 text-slate-400" />
                 <h2 className="text-sm font-bold text-slate-500 tracking-wider">Overall Statistics</h2>
               </div>

               <div className="bg-white rounded-3xl shadow-sm border border-gray-100 divide-y divide-gray-50">
                 <div className="p-4 flex items-center justify-between">
                   <div className="flex items-center gap-4">
                     <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center text-purple-600">
                       <Ticket className="w-5 h-5" />
                     </div>
                     <p className="text-sm text-gray-400 font-medium">Total Tickets</p>
                   </div>
                   <p className="text-lg font-bold text-slate-800">{data.overallTickets}</p>
                 </div>

                 <div className="p-4 flex items-center justify-between">
                   <div className="flex items-center gap-4">
                     <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
                       <IndianRupee className="w-5 h-5" />
                     </div>
                     <p className="text-sm text-gray-400 font-medium">Total Collection</p>
                   </div>
                   <p className="text-lg font-bold text-slate-800">₹{data.overallCollection}</p>
                 </div>

                 <div className="p-4 flex items-center justify-between">
                   <div className="flex items-center gap-4">
                     <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                       <MapPin className="w-5 h-5" />
                     </div>
                     <p className="text-sm text-gray-400 font-medium">Active Parking</p>
                   </div>
                   <p className="text-lg font-bold text-slate-800">{data.overallActive}</p>
                 </div>
               </div>
             </div>
           </>
         )}

         {activeTab === 'approvals' && (
           <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 flex flex-col items-center justify-center text-center mt-4 min-h-[300px]">
             <Ticket className="w-8 h-8 text-gray-300 mb-4" />
             <h3 className="text-lg font-bold text-slate-800 mb-2">
               No Pending Approvals
             </h3>
             <p className="text-sm text-gray-400 max-w-[200px]">
               All requests have been processed. Check back later.
             </p>
           </div>
         )}
      </div>
    </div>
  );
};

export default AdminDashboard;
