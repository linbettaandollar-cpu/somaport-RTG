import React, { useState } from 'react';

export default function App() {
  const [activeTab, setActiveTab] = useState('planning');

  const shifts = [
    { crane: "RTG 01", operator: "Farih", partner: "Rmaili", shift: "Day Shift", status: "Active" },
    { crane: "RTG 02", operator: "Wandour", partner: "Benhadrya", shift: "Day Shift", status: "Active" },
    { crane: "RTG 03", operator: "Amin", partner: "Ousama", shift: "Day Shift", status: "Active" },
    { crane: "RTG 04", operator: "Anbry", partner: "Asli", shift: "Night Shift", status: "Pending" },
  ];

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white p-4 font-sans">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-blue-500">SOMAPORT Planning</h1>
        <p className="text-gray-400">RTG Operations Dashboard</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {shifts.map((item, index) => (
          <div key={index} className="bg-[#1A1A1A] border border-gray-800 p-4 rounded-xl shadow-lg">
            <div className="flex justify-between items-center mb-2">
              <span className="text-blue-400 font-mono text-sm">{item.crane}</span>
              <span className={`text-[10px] px-2 py-1 rounded-full ${item.status === 'Active' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
                {item.status}
              </span>
            </div>
            <h3 className="text-lg font-semibold">{item.operator}</h3>
            <p className="text-sm text-gray-500">Partner: {item.partner}</p>
            <div className="mt-4 pt-4 border-t border-gray-800 flex justify-between items-center">
              <span className="text-xs text-gray-400">{item.shift}</span>
              <button className="text-xs bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded">Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
