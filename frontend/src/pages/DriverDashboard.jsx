import React from 'react';
import { Bell, Car, MapPin, User, Clock } from 'lucide-react';

const DriverDashboard = () => {
  return (
    <div className="min-h-screen bg-slate-100">
      {/* HEADER */}
      <div className="bg-indigo-700 px-6 pt-8 pb-10 flex justify-between">
        <div>
          <p className="text-indigo-200 text-sm">Driver Console</p>
          <p className="text-indigo-200 mt-2">Welcome back,</p>
          <h1 className="text-white text-2xl font-bold">Rajesh Kumar</h1>
        </div>
        <div className="relative">
          <Bell className="w-6 h-6 text-white" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-xs w-5 h-5 flex items-center justify-center rounded-full text-white">
            1
          </span>
        </div>
      </div>

      {/* CONTENT */}
      <div className="-mt-6 px-5 pb-10 space-y-6">

        {/* NEW ASSIGNMENTS */}
        <h2 className="text-slate-800 font-semibold">New Assignments</h2>

        <Card>
          <VehicleHeader
            car="Maruti Swift"
            plate="MH12CD5678"
            badge="Retrieve Vehicle"
          />

          <button
            className="w-full mt-4 bg-indigo-400 text-white py-4 rounded-xl font-semibold"
          >
            Accept Assignment →
          </button>
        </Card>

        {/* CURRENT ASSIGNMENT */}
        <h2 className="text-slate-800 font-semibold">Current Assignment</h2>

        <Card>
          <VehicleHeader
            car="Honda City"
            plate="MH02AB1234"
            badge="Park Vehicle"
          />

          <Details
            customer="Amit Sharma"
            mall="Phoenix Mall"
            city="Lower Parel, Mumbai"
            level="Level 2 - B34"
            time="04:37 pm"
          />

          <button
            className="w-full mt-6 bg-indigo-600 text-white py-4 rounded-xl font-semibold"
          >
            Start Parking
          </button>
        </Card>

        {/* STATS (ALWAYS VISIBLE) */}
        <div className="grid grid-cols-3 text-center pt-6">
          <Stat label="Today" value="12" />
          <Stat label="Parked" value="8" color="text-green-600" />
          <Stat label="Retrieved" value="4" color="text-orange-500" />
        </div>
      </div>
    </div>
  );
};

/* ---------- COMPONENTS ---------- */

const Card = ({ children }) => (
  <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-5">
    {children}
  </div>
);

const VehicleHeader = ({ car, plate, badge }) => (
  <div className="flex gap-4 mb-4">
    <div className="bg-indigo-100 p-4 rounded-2xl">
      <Car className="w-6 h-6 text-indigo-600" />
    </div>
    <div>
      <h3 className="text-lg font-bold">{car}</h3>
      <p className="text-gray-400">{plate}</p>
      <span className="inline-block mt-2 px-4 py-1 rounded-full text-sm bg-yellow-100 text-yellow-700">
        {badge}
      </span>
    </div>
  </div>
);

const Details = ({ customer, mall, city, level, time }) => (
  <>
    <Detail icon={<User />} label="Customer" value={customer} />
    <Detail
      icon={<MapPin />}
      label="Location"
      value={
        <>
          {mall}
          <br />
          <span className="text-gray-400">{city}</span>
        </>
      }
    />
    <Detail icon={<MapPin />} label="Park at" value={level} />
    <Detail icon={<Clock />} label="Assigned at" value={time} />
  </>
);

const Detail = ({ icon, label, value }) => (
  <div className="flex gap-4 py-3">
    <div className="text-gray-400 mt-1">{icon}</div>
    <div>
      <p className="text-gray-400 text-sm">{label}</p>
      <p className="text-slate-800 font-medium">{value}</p>
    </div>
  </div>
);

const Stat = ({ label, value, color = 'text-slate-800' }) => (
  <div>
    <p className="text-gray-400">{label}</p>
    <p className={`text-2xl font-bold ${color}`}>{value}</p>
  </div>
);

export default DriverDashboard;
