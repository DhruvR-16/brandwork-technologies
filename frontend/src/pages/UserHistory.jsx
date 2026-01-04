import React, { useState } from "react";
import {
  ArrowLeft,
  MapPin,
  Clock,
  Car,
  CreditCard,
  Download,
  ChevronDown
} from "lucide-react";

const ParkingHistory = () => {
  return (
    <div className="min-h-screen bg-slate-100">
      <header className="bg-gradient-to-br from-indigo-600 to-violet-600 text-white px-5 pt-8 pb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-white/20 rounded-xl">
            <ArrowLeft className="w-5 h-5" />
          </div>
          <h1 className="text-lg font-semibold">Parking History</h1>
        </div>
        <p className="text-indigo-200 text-sm">2 total bookings</p>
      </header>

      <div className="-mt-6 px-5 pb-10 space-y-6">
        <HistoryCard
          mall="Phoenix Mall"
          location="Lower Parel, Mumbai"
          amount="₹180"
          date="8 Dec 2025"
          vehicle="MH 12 AB 1234"
          ticketId="TK-2025-12-08-001"
          car="Toyota Camry"
          entry="10:30 am"
          exit="02:45 pm"
          payment="UPI"
          duration="4h 15m"
          defaultOpen
        />

        <HistoryCard
          mall="Central Plaza"
          location="Andheri West, Mumbai"
          amount="₹120"
          date="5 Dec 2025"
          vehicle="MH 14 CD 5678"
          ticketId="TK-2025-12-05-002"
          car="Honda City"
          entry="11:10 am"
          exit="01:45 pm"
          payment="Card"
          duration="2h 50m"
        />
      </div>
    </div>
  );
};



const HistoryCard = ({
  mall,location,amount,date,vehicle,ticketId,car,entry,exit,payment,duration,defaultOpen = false
}) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="bg-white  border border-gray-200">
      <div
        onClick={() => setOpen(!open)}
        className="p-4 cursor-pointer"
      >
        <div className="flex justify-between items-start">
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

        <div className="flex justify-between items-center text-sm text-slate-500 mt-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Car className="w-4 h-4" />
              <span>{vehicle}</span>
            </div>
          </div>

          <ChevronDown
            className={`w-5 h-5 transition-transform ${
              open ? "rotate-180" : ""
            }`}
          />
        </div>
      </div>

      {open && (
        <div className="border-t border-gray-100 px-4 py-4 space-y-4">
          <h4 className="text-sm font-semibold text-slate-600">
            Booking Details
          </h4>

          <DetailRow label="Ticket ID" value={ticketId} />

          <DetailRow
            icon={<Car className="w-4 h-4" />}
            label="Vehicle"
            value={
              <>
                {car}
                <br />
                <span className="text-gray-400">{vehicle}</span>
              </>
            }
          />

          <div className="grid grid-cols-2 gap-4">
            <DetailRow
              icon={<Clock className="w-4 h-4" />}
              label="Entry"
              value={entry}
            />
            <DetailRow
              icon={<Clock className="w-4 h-4" />}
              label="Exit"
              value={exit}
            />
          </div>

          <DetailRow
            icon={<CreditCard className="w-4 h-4" />}
            label="Payment"
            value={payment}
          />

          <div className="flex justify-between items-center bg-indigo-50 text-indigo-700 rounded-xl px-4 py-3">
            <span className="font-medium">Duration</span>
            <span className="font-semibold">{duration}</span>
          </div>

          <button className="w-full bg-indigo-600 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2">
            <Download className="w-5 h-5" />
            Download Receipt
          </button>
        </div>
      )}
    </div>
  );
};


const DetailRow = ({ icon, label, value }) => {
  return (
    <div className="flex gap-3 items-start">
      <div className="text-slate-400 mt-1">
        {icon}
      </div>
      <div>
        <p className="text-sm text-slate-400">{label}</p>
        <p className="text-slate-800 font-medium">{value}</p>
      </div>
    </div>
  );
};

export default ParkingHistory;
