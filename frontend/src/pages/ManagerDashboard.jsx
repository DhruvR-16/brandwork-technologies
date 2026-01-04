import React, { useState } from 'react';
import { ArrowLeft, UserPlus, Search, Phone, Edit, MapPin, Clock, CheckCircle, Upload, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const ManagerDashboard = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [isAddDriverOpen, setIsAddDriverOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const [driverForm, setDriverForm] = useState({
    name: '',
    dob: '',
    email: '',
    mobile: '',
    licenseNo: '',
    expiryDate: ''
  });

  const assignments = [
    {
      id: 1,
      car: 'Honda City',
      plate: 'MH02AB1234',
      status: 'Parked',
      customer: 'Amit Sharma',
      valet: 'Rajesh Kumar',
      valetId: 'V001',
      location: 'Phoenix Mall',
      city: 'Lower Parel, Mumbai',
      entryTime: '4 Jan, 09:40 am',
      duration: '2h 0m',
      amount: '150',
      paymentStatus: 'Paid'
    },
    {
      id: 2,
      car: 'Hyundai Creta',
      plate: 'MH04XY9876',
      status: 'Parked',
      customer: 'Sneha Patel',
      valet: 'Vikram Singh',
      valetId: 'V003',
      location: 'Phoenix Mall',
      city: 'Lower Parel, Mumbai',
      entryTime: '4 Jan, 10:15 am',
      duration: '1h 25m',
      amount: '120',
      paymentStatus: 'Unpaid'
    },
    {
      id: 3,
      car: 'Toyota Fortuner',
      plate: 'MH01CD5555',
      status: 'Retrieving',
      customer: 'Rohan Mehta',
      valet: 'Arjun Das',
      valetId: 'V005',
      location: 'Phoenix Mall',
      city: 'Lower Parel, Mumbai',
      entryTime: '4 Jan, 08:30 am',
      duration: '3h 10m',
      amount: '250',
      paymentStatus: 'Paid'
    },
    {
       id: 4,
       car: 'Mercedes C-Class',
       plate: 'MH12FK9999',
       status: 'Parked',
       customer: 'Priya Kapoor',
       valet: 'Suresh Raina',
       valetId: 'V002',
       location: 'Phoenix Mall',
       city: 'Lower Parel, Mumbai',
       entryTime: '4 Jan, 11:00 am',
       duration: '0h 40m',
       amount: '100',
       paymentStatus: 'Unpaid'
    },
     {
       id: 5,
       car: 'BMW X1',
       plate: 'MH14AZ1111',
       status: 'Retrieved',
       customer: 'Karan Johar',
       valet: 'Manoj Bajpayee',
       valetId: 'V007',
       location: 'Phoenix Mall',
       city: 'Lower Parel, Mumbai',
       entryTime: '4 Jan, 07:45 am',
       duration: '3h 55m',
       amount: '300',
       paymentStatus: 'Paid'
    }
  ];

  const filteredAssignments = assignments.filter(item => {
    const matchesFilter = activeFilter === 'All' || item.status === activeFilter;
    const matchesSearch = item.car.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.plate.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.valet.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const handleAddDriver = (e) => {
    e.preventDefault();
    alert(`Driver ${driverForm.name} added successfully!`);
    setIsAddDriverOpen(false);
    setDriverForm({ name: '', dob: '', email: '', mobile: '', licenseNo: '', expiryDate: '' });
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      <div className="bg-indigo-700 text-white pt-8 pb-12 px-6">
        <div className="flex justify-between items-start mb-6">
           <div className="flex items-center gap-3">
             <Link to="/" className="p-2 bg-white/10 rounded-xl">
               <ArrowLeft className="w-5 h-5 text-white" />
             </Link>
             <h1 className="text-xl font-bold">Manager Dashboard</h1>
           </div>
           
           <button 
             onClick={() => setIsAddDriverOpen(true)}
             className="bg-indigo-600 text-white px-4 py-2 rounded-xl text-sm font-semibold flex items-center gap-2"
           >
             <UserPlus className="w-4 h-4" /> Add Driver
           </button>
        </div>
        
        <p className="text-slate-400 text-sm max-w-[80%]">Manage valet assignments and parking operations</p>
      </div>

      <div className="-mt-8 px-5 relative z-20 space-y-6">
        
        <div className="grid grid-cols-2 gap-3">
           <div className="bg-white p-4 rounded-2xl border border-gray-200">
              <p className="text-slate-500 text-xs font-medium mb-1">Active Cars</p>
              <p className="text-2xl font-bold text-slate-800">3</p>
           </div>
           <div className="bg-white p-4 rounded-2xl border border-gray-200">
              <p className="text-slate-500 text-xs font-medium mb-1">Retrieving</p>
              <p className="text-2xl font-bold text-slate-800">1</p>
           </div>
           <div className="bg-white p-4 rounded-2xl border border-gray-200">
              <p className="text-slate-500 text-xs font-medium mb-1">Total Today</p>
              <p className="text-2xl font-bold text-slate-800">5</p>
           </div>
           <div className="bg-white p-4 rounded-2xl border border-gray-200">
              <p className="text-slate-500 text-xs font-medium mb-1">Revenue</p>
              <p className="text-2xl font-bold text-slate-800">₹825</p>
           </div>
        </div>

        <div className="bg-white p-3 rounded-xl border border-gray-200 flex items-center gap-3">
           <Search className="w-5 h-5 text-gray-400" />
           <input 
             type="text" 
             placeholder="Search by plate, customer or valet..." 
             className="flex-1 outline-none text-sm text-slate-700 placeholder:text-gray-400"
             value={searchQuery}
             onChange={(e) => setSearchQuery(e.target.value)}
           />
        </div>

        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
           {['All', 'Parked', 'Retrieving', 'Retrieved'].map(filter => (
             <button
               key={filter}
               onClick={() => setActiveFilter(filter)}
               className={`px-5 py-2.5 rounded-xl text-sm font-bold whitespace-nowrap border ${
                 activeFilter === filter 
                   ? 'bg-indigo-700 text-white border-indigo-700' 
                   : 'bg-white text-slate-500 border-gray-200'
               }`}
             >
               {filter} {filter === 'All' ? '(5)' : filter === 'Parked' ? '(3)' : filter === 'Retrieving' ? '(1)' : '(1)'}
             </button>
           ))}
        </div>

        <div className="space-y-4">
           {filteredAssignments.map(item => (
             <div key={item.id} className="bg-white p-5 rounded-3xl border border-gray-200">
                
                <div className="flex justify-between items-start mb-4">
                   <div className="flex items-center gap-3">
                      <div className="bg-slate-100 p-2.5 rounded-full">
                         <div className="w-5 h-5 flex items-center justify-center text-slate-600 font-bold">C</div>
                      </div>
                      <div>
                         <h3 className="font-bold text-slate-900 text-lg">{item.car}</h3>
                         <p className="text-sm text-slate-500 font-mono tracking-wide">{item.plate}</p>
                      </div>
                   </div>
                   <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                     item.status === 'Parked' ? 'bg-emerald-100 text-emerald-700' : 
                     item.status === 'Retrieving' ? 'bg-orange-100 text-orange-700' : 'bg-gray-100 text-gray-600'
                   }`}>
                     {item.status}
                   </span>
                </div>

                {/* Customer */}
                <div className="mb-4 pl-12 border-l-2 border-gray-100 ml-5 py-1">
                   <p className="text-xs text-slate-400 mb-0.5">Customer</p>
                   <p className="text-sm font-semibold text-slate-800">{item.customer}</p>
                </div>

                {/* Valet */}
                <div className="flex justify-between items-center mb-5 bg-gray-50 p-3 rounded-xl">
                   <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold">
                         {item.valet.charAt(0)}
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 mb-0.5">Valet Assigned</p>
                        <p className="text-sm font-semibold text-slate-800">{item.valet}</p>
                        <p className="text-[10px] text-slate-400 font-mono">ID: {item.valetId}</p>
                      </div>
                   </div>
                   <button className="p-2 bg-emerald-500 text-white rounded-lg">
                      <Phone className="w-4 h-4" />
                   </button>
                </div>

                {/* Action Button */}
                <button className="w-full bg-slate-50 py-3 rounded-xl text-slate-600 text-sm font-bold flex items-center justify-center gap-2 mb-5">
                   <Edit className="w-4 h-4" /> Reassign Valet
                </button>

                {/* Details */}
                <div className="space-y-3 pt-4 border-t border-gray-100">
                   <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-gray-400 mt-0.5" />
                      <div>
                        <p className="text-xs text-slate-400">Location</p>
                        <p className="text-sm font-medium text-slate-800">{item.location}</p>
                        <p className="text-xs text-slate-400">{item.city}</p>
                      </div>
                   </div>
                   <div className="flex items-start gap-3">
                      <Clock className="w-4 h-4 text-gray-400 mt-0.5" />
                      <div>
                        <p className="text-xs text-slate-400">Entry Time</p>
                        <p className="text-sm font-medium text-slate-800">{item.entryTime}</p>
                        <p className="text-xs text-slate-400">Duration: {item.duration}</p>
                      </div>
                   </div>
                </div>

                <div className="mt-5 bg-emerald-50 p-4 rounded-xl flex justify-between items-center">
                   <div className="flex items-center gap-2">
                      <span className="text-emerald-700 font-bold">₹</span>
                      <div>
                         <p className="text-xs text-emerald-600 font-medium">Payment</p>
                         <p className="text-lg font-bold text-slate-900">₹{item.amount}</p>
                      </div>
                   </div>
                   <div className="px-3 py-1 rounded-lg bg-emerald-200 text-emerald-800 text-xs font-bold flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" /> {item.paymentStatus}
                   </div>
                </div>

             </div>
           ))}
        </div>
      </div>

      {/* Add Driver Modal */}
      {isAddDriverOpen && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-end sm:items-center justify-center p-4">
           <div className="bg-white w-full max-w-md rounded-[2.5rem] p-6 relative max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-6">
                 <h2 className="text-xl font-bold text-slate-800">Add New Driver</h2>
                 <button onClick={() => setIsAddDriverOpen(false)} className="p-2 bg-gray-100 rounded-full">
                    <X className="w-5 h-5 text-slate-500" />
                 </button>
              </div>

              <form onSubmit={handleAddDriver} className="space-y-4">
                 <div className="space-y-1">
                    <label className="text-sm font-semibold text-slate-700 ml-1">Full Name</label>
                    <input 
                      required 
                      type="text" 
                      placeholder="e.g. Rahul Verma" 
                      value={driverForm.name}
                      onChange={e => setDriverForm({...driverForm, name: e.target.value})}
                      className="w-full bg-gray-50 border border-gray-200 p-4 rounded-xl outline-none font-medium"
                    />
                 </div>

                 <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                       <label className="text-sm font-semibold text-slate-700 ml-1">DOB</label>
                       <input 
                         required 
                         type="date" 
                         value={driverForm.dob}
                         onChange={e => setDriverForm({...driverForm, dob: e.target.value})}
                         className="w-full bg-gray-50 border border-gray-200 p-4 rounded-xl outline-none font-medium text-slate-600"
                       />
                    </div>
                    <div className="space-y-1">
                       <label className="text-sm font-semibold text-slate-700 ml-1">Mobile</label>
                       <input 
                         required 
                         type="tel" 
                         placeholder="+91" 
                         value={driverForm.mobile}
                         onChange={e => setDriverForm({...driverForm, mobile: e.target.value})}
                         className="w-full bg-gray-50 border border-gray-200 p-4 rounded-xl outline-none font-medium"
                       />
                    </div>
                 </div>

                 <div className="space-y-1">
                    <label className="text-sm font-semibold text-slate-700 ml-1">Email Address</label>
                    <input 
                      required 
                      type="email" 
                      placeholder="driver@example.com" 
                      value={driverForm.email}
                      onChange={e => setDriverForm({...driverForm, email: e.target.value})}
                      className="w-full bg-gray-50 border border-gray-200 p-4 rounded-xl outline-none font-medium"
                    />
                 </div>

                 <hr className="border-gray-100 my-2" />
                 
                 <div className="space-y-1">
                    <label className="text-sm font-semibold text-slate-700 ml-1">Licence Number</label>
                    <input 
                      required 
                      type="text" 
                      placeholder="MH12 2022 1234567" 
                      value={driverForm.licenseNo}
                      onChange={e => setDriverForm({...driverForm, licenseNo: e.target.value})}
                      className="w-full bg-gray-50 border border-gray-200 p-4 rounded-xl outline-none font-medium font-mono uppercase"
                    />
                 </div>

                 <div className="space-y-1">
                    <label className="text-sm font-semibold text-slate-700 ml-1">Expiry Date</label>
                    <input 
                      required 
                      type="date" 
                      value={driverForm.expiryDate}
                      onChange={e => setDriverForm({...driverForm, expiryDate: e.target.value})}
                      className="w-full bg-gray-50 border border-gray-200 p-4 rounded-xl outline-none font-medium text-slate-600"
                    />
                 </div>

                 {/* Static Upload Div */}
                 <div className="border-2 border-dashed border-gray-300 bg-gray-50 rounded-2xl p-6 flex flex-col items-center justify-center text-center cursor-pointer">
                    <div className="bg-white p-3 rounded-full mb-3 border border-gray-100">
                       <Upload className="w-6 h-6 text-indigo-500" />
                    </div>
                    <p className="text-sm font-bold text-slate-700">Upload Driving Licence</p>
                    <p className="text-xs text-slate-400 mt-1">Supports JPG, PNG, PDF (Max 5MB)</p>
                 </div>

                 <button type="submit" className="w-full bg-indigo-700 text-white py-4 rounded-xl font-bold text-lg mt-4">
                    Register Driver
                 </button>
              </form>
           </div>
        </div>
      )}
    </div>
  );
};

export default ManagerDashboard;
