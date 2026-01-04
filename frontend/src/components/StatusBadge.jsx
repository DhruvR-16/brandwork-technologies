import React from 'react';

const StatusBadge = ({ status }) => {
  const styles = {
    parked: 'bg-emerald-100 text-emerald-800',
    retrieving: 'bg-orange-100 text-orange-800',
    completed: 'bg-gray-100 text-gray-800',
    requested: 'bg-blue-100 text-blue-800',
  };

  const labels = {
    parked: 'Parked',
    retrieving: 'Retrieving',
    completed: 'Completed',
    requested: 'Requested',
  };

  const normalizedStatus = status.toLowerCase();
  
  return (
    <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${styles[normalizedStatus] || 'bg-gray-100 text-gray-800'}`}>
      {labels[normalizedStatus] || status}
    </span>
  );
};

export default StatusBadge;
