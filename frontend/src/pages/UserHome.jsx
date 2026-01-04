import React from 'react';

import ActionCard from '../components/ActionCard';
import StatusBadge from '../components/StatusBadge';
import { Scan, MapPin, Clock, Car } from 'lucide-react';

const UserHome = ({ activeParking }) => {
  return (
    <>

      <header className="bg-indigo-600 text-white px-6 pt-10 pb-8 flex justify-between items-center sticky top-0 z-20 shadow-sm">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Start Parking</h1>
        </div>
      </header>

      <div className="px-6 space-y-6">

        {activeParking && (
          <div className="bg-white rounded-2xl p-5 shadow-lg border-l-4 border-emerald-500 animate-in fade-in slide-in-from-top-4 duration-500 mb-6">
             <div className="flex justify-between items-start mb-4">
               <div>
                  <span className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded-md text-xs font-bold tracking-wide">Active Session</span>
                  <h3 className="font-bold text-slate-900 text-lg mt-2">{activeParking.car.name}</h3>
                  <p className="text-sm text-slate-500 font-mono">{activeParking.car.plate}</p>
               </div>
               <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600">
                  <Car className="w-6 h-6" />
               </div>
             </div>
             
             <div className="space-y-3">
               <div className="flex items-center gap-3 text-sm text-slate-600">
                  <MapPin className="w-4 h-4 text-indigo-500" />
                  <span className="font-medium">{activeParking.mall}</span>
               </div>
               <div className="flex items-center gap-3 text-sm text-slate-600">
                  <Clock className="w-4 h-4 text-indigo-500" />
                  <span>Started at <span className="font-bold text-slate-900">{activeParking.startTime}</span></span>
               </div>
             </div>
             
             <div className="mt-4 pt-4 border-t border-gray-100 flex gap-2">
                <button className="flex-1 bg-indigo-600 text-white py-2.5 rounded-xl font-semibold text-sm shadow-md hover:bg-indigo-700 transition-colors">View Ticket</button>
                <button className="flex-1 bg-white border border-gray-200 text-slate-700 py-2.5 rounded-xl font-semibold text-sm hover:bg-gray-50 transition-colors">Extend</button>
             </div>
          </div>
        )}

        <ActionCard 
          title="Scan to Park" 
          description="Scan QR code at the valet station to drop off your car."
          icon={Scan}
          to="/scan"
          gradient="bg-gradient-to-br from-orange-50 to-yellow-50 border border-orange-200"
          textColor="text-slate-900"
          iconBg="bg-orange-500 text-white"
        />


        <div>
          <h2 className="text-lg font-bold text-slate-900 mb-4">
            Recent Parking
          </h2>

          <div className="space-y-4">
            <RecentParkingCard
              mall="Phoenix Mall"
              location="Lower Parel, Mumbai"
              amount="₹180"
              date="8 Dec 2025"
              vehicle="MH 12 AB 1234"
              duration="4h 15m"
            />

            <RecentParkingCard
              mall="Central Plaza"
              location="Andheri West, Mumbai"
              amount="₹120"
              date="5 Dec 2025"
              vehicle="MH 14 CD 5678"
              duration="2h 50m"
            />
          </div>
        </div>
      </div>
    </>
  );
};


const RecentParkingCard = ({ mall, location, amount, date, vehicle, duration }) => {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-4 shadow-sm">
      

      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="text-base font-semibold text-slate-900">
            {mall}
          </h3>

          <div className="flex items-center gap-1 text-slate-500 text-sm mt-1">
            <MapPin className="w-4 h-4" />
            <span>{location}</span>
          </div>
        </div>

        <div className="text-right">
          <p className="text-lg font-semibold text-slate-900">
            {amount}
          </p>
          <span className="inline-block mt-1 px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
            completed
          </span>
        </div>
      </div>

      <hr className="my-3" />


      <div className="flex items-center gap-4 text-sm text-slate-500">
        <div className="flex items-center gap-1">
          <Clock className="w-4 h-4" />
          <span>{date}</span>
        </div>

        <div className="flex items-center gap-1">
          <Car className="w-4 h-4" />
          <span>{vehicle}</span>
        </div>

        <span>{duration}</span>
      </div>
    </div>
  );
};

export default UserHome;
