import React, { useState, useEffect } from 'react';
import { ArrowLeft, Car, CreditCard, Banknote, Smartphone, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ScanPage = ({ setActiveParking }) => {
  const navigate = useNavigate();
  const [showCarPopup, setShowCarPopup] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState('upi');

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCarPopup(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);


  const handleCarSelect = (car) => {
    setSelectedCar(car);
    setShowCarPopup(false);
  };

  if (selectedCar) {
    return (
      <div className="min-h-full bg-gray-50 pb-20">
        <div className="bg-white p-4 sticky top-0 z-30 shadow-sm flex items-center gap-3">
          <button onClick={() => setSelectedCar(null)} className="p-2 hover:bg-gray-100 rounded-full">
            <ArrowLeft className="w-6 h-6 text-slate-800" />
          </button>
          <h1 className="text-lg font-bold text-slate-800">Confirm Parking</h1>
        </div>

        <div className="p-5 space-y-6">
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-200">
            <h2 className="text-sm font-bold text-slate-500 tracking-wide mb-4">Vehicle Details</h2>
            <div className="space-y-4">
               <div>
                  <p className="text-xs text-gray-400 mb-1">Owner Name</p>
                  <p className="font-semibold text-slate-800">{selectedCar.owner}</p>
               </div>
               <div className="flex justify-between">
                 <div>
                    <p className="text-xs text-gray-400 mb-1">Vehicle Number</p>
                    <p className="font-semibold text-slate-800">{selectedCar.plate}</p>
                 </div>
                 <div className="text-right">
                    <p className="text-xs text-gray-400 mb-1">Mobile Number</p>
                    <p className="font-semibold text-slate-800">{selectedCar.mobile}</p>
                 </div>
               </div>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-200">
             <h2 className="text-sm font-bold text-slate-500 tracking-wide mb-2">Parking Location</h2>
             <p className="font-bold text-slate-800 text-lg">Phoenix Mall - Lower Parel</p>
             <p className="text-slate-500 text-sm">Level 2, Zone B</p>
          </div>

          <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-200">
             <h2 className="text-sm font-bold text-slate-500 tracking-wide mb-4">Payment Method</h2>
             <div className="space-y-3">
                <label className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer ${paymentMethod === 'upi' ? 'border-indigo-600 bg-indigo-50' : 'border-gray-200'}`}>
                   <input type="radio" name="payment" value="upi" checked={paymentMethod === 'upi'} onChange={() => setPaymentMethod('upi')} className="accent-indigo-600 w-5 h-5" />
                   <Smartphone className="w-5 h-5 text-slate-600" />
                   <span className="font-semibold text-slate-700">UPI</span>
                </label>
                <label className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer ${paymentMethod === 'netbanking' ? 'border-indigo-600 bg-indigo-50' : 'border-gray-200'}`}>
                   <input type="radio" name="payment" value="netbanking" checked={paymentMethod === 'netbanking'} onChange={() => setPaymentMethod('netbanking')} className="accent-indigo-600 w-5 h-5" />
                   <Banknote className="w-5 h-5 text-slate-600" />
                   <span className="font-semibold text-slate-700">Netbanking</span>
                </label>
                <label className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer ${paymentMethod === 'card' ? 'border-indigo-600 bg-indigo-50' : 'border-gray-200'}`}>
                   <input type="radio" name="payment" value="card" checked={paymentMethod === 'card'} onChange={() => setPaymentMethod('card')} className="accent-indigo-600 w-5 h-5" />
                   <CreditCard className="w-5 h-5 text-slate-600" />
                   <span className="font-semibold text-slate-700">Credit / Debit Card</span>
                </label>
                <label className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer ${paymentMethod === 'cash' ? 'border-indigo-600 bg-indigo-50' : 'border-gray-200'}`}>
                   <input type="radio" name="payment" value="cash" checked={paymentMethod === 'cash'} onChange={() => setPaymentMethod('cash')} className="accent-indigo-600 w-5 h-5" />
                   <Banknote className="w-5 h-5 text-slate-600" />
                   <span className="font-semibold text-slate-700">Cash</span>
                </label>
             </div>
          </div>

          <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-200">
             <h2 className="text-sm font-bold text-slate-500 tracking-wide mb-4">Payment Summary</h2>
             <div className="space-y-2 mb-4 text-sm">
                <div className="flex justify-between text-slate-600">
                   <span>Base Fee (2 hrs)</span>
                   <span>₹50.00</span>
                </div>
                <div className="flex justify-between text-slate-600">
                   <span>GST (18%)</span>
                   <span>₹9.00</span>
                </div>
                <div className="flex justify-between text-slate-600">
                   <span>Service Fee</span>
                   <span>₹10.00</span>
                </div>
             </div>
             <div className="border-t border-gray-100 pt-3 flex justify-between items-center">
                <span className="font-bold text-slate-900">Total Amount</span>
                <span className="font-black text-xl text-indigo-600">₹69.00</span>
             </div>
          </div>

          <button 
             onClick={() => {
               setActiveParking({
                 car: selectedCar,
                 mall: 'Phoenix Mall',
                 location: 'Level 2, Zone B',
                 startTime: new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true }),
                 date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
               });
               navigate('/');
             }} 
             className="w-full bg-indigo-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-indigo-700 transition-colors shadow-lg"
          >
             Park My Car
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full bg-black relative flex flex-col items-center justify-center overflow-hidden">
       <div className="relative z-10 flex flex-col items-center px-10 text-center">
          <div className="w-64 h-64 border-2 border-white/50 rounded-3xl relative mb-8 flex items-center justify-center">
             <div className="w-60 h-60 border border-white/20 rounded-2xl"></div>
             <div className="w-full h-1 bg-indigo-500 absolute top-1/2 -translate-y-1/2 opacity-50"></div>
          </div>
          <h2 className="text-white text-xl font-bold mb-2">Scanning...</h2>
          <p className="text-white/50 text-sm">Please wait while we detect your vehicle.</p>
       </div>

       {showCarPopup && (
         <>
           <div className="absolute inset-0 bg-black/50 z-20 backdrop-blur-sm animate-in fade-in duration-300" onClick={() => setShowCarPopup(false)}></div>
           <div className="absolute inset-x-0 bottom-0 bg-white rounded-t-3xl p-6 z-30 animate-in slide-in-from-bottom duration-300">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Select Vehicle to Register</h3>
              <div className="space-y-3">
                 <button 
                   onClick={() => handleCarSelect({ id: 1, name: 'Honda City', plate: 'MH 02 AB 1234', owner: 'Rajesh Kumar', mobile: '+91 98765 43210' })}
                   className="w-full bg-gray-50 border border-gray-200 p-4 rounded-xl flex items-center gap-4 hover:border-indigo-500 hover:bg-indigo-50 transition-colors text-left"
                 >
                    <div className="bg-white p-2 rounded-full border border-gray-100">
                      <Car className="w-6 h-6 text-slate-700" />
                    </div>
                    <div>
                       <h4 className="font-bold text-slate-900">Honda City</h4>
                       <p className="text-sm text-slate-500">MH 02 AB 1234</p>
                    </div>
                 </button>

                 <button 
                   onClick={() => handleCarSelect({ id: 2, name: 'Hyundai Creta', plate: 'MH 04 XY 9876', owner: 'Rajesh Kumar', mobile: '+91 98765 43210' })}
                   className="w-full bg-gray-50 border border-gray-200 p-4 rounded-xl flex items-center gap-4 hover:border-indigo-500 hover:bg-indigo-50 transition-colors text-left"
                 >
                    <div className="bg-white p-2 rounded-full border border-gray-100">
                      <Car className="w-6 h-6 text-slate-700" />
                    </div>
                    <div>
                       <h4 className="font-bold text-slate-900">Hyundai Creta</h4>
                       <p className="text-sm text-slate-500">MH 04 XY 9876</p>
                    </div>
                 </button>
              </div>
           </div>
         </>
       )}
    </div>
  );
};

export default ScanPage;
