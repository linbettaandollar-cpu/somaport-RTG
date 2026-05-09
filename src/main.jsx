import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function App() {
  const [activeTab, setActiveTab] = useState('planning');
  const [date, setDate] = useState('');

  // جلب التاريخ واليوم أوتوماتيكيا
  useEffect(() => {
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    setDate(today.toLocaleDateString('fr-FR', options)); 
  }, []);

  // بيانات الـ RTG القابلة للتعديل
  const [rtgs, setRtgs] = useState([
    { id: 1, name: "RTG 01", operator: "Farih", partner: "Rmaili", status: "Active", img: "https://images.unsplash.com/photo-1586528116311-ad8ed3c812d0?q=80&w=600&auto=format&fit=crop" },
    { id: 2, name: "RTG 02", operator: "Wandour", partner: "Benhadrya", status: "Active", img: "https://images.unsplash.com/photo-1586528116311-ad8ed3c812d0?q=80&w=600&auto=format&fit=crop" },
    { id: 3, name: "RTG 03", operator: "Amin", partner: "Ousama", status: "Maintenance", img: "https://images.unsplash.com/photo-1586528116311-ad8ed3c812d0?q=80&w=600&auto=format&fit=crop" },
    { id: 4, name: "RTG 04", operator: "Anbry", partner: "Asli", status: "Active", img: "https://images.unsplash.com/photo-1586528116311-ad8ed3c812d0?q=80&w=600&auto=format&fit=crop" },
  ]);

  // بيانات الكونجيات
  const [conges, setConges] = useState([
    { id: 1, name: "Hassan", depart: "10 Mai 2026", retour: "20 Mai 2026", type: "Annuel" },
    { id: 2, name: "Youssef", depart: "12 Mai 2026", retour: "15 Mai 2026", type: "Maladie" },
  ]);

  // دالة باش نبدلو السميات وسط السيت
  const handleNameChange = (id, field, value) => {
    setRtgs(rtgs.map(rtg => rtg.id === id ? { ...rtg, [field]: value } : rtg));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B0B0B] to-[#1a1c23] text-white font-sans">
      <header className="bg-[#121212]/80 backdrop-blur-md border-b border-gray-800 p-6 flex flex-col md:flex-row justify-between items-center sticky top-0 z-10 gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400 tracking-tight">
            SOMAPORT Planning
          </h1>
          <p className="text-gray-400 text-sm mt-2 capitalize font-medium flex items-center gap-2">
            📅 {date}
          </p>
        </div>
        <div className="flex gap-2 bg-black/50 p-1.5 rounded-xl border border-gray-800">
          <button onClick={() => setActiveTab('planning')} className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all duration-300 ${activeTab === 'planning' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'}`}>الـ RTG</button>
          <button onClick={() => setActiveTab('conges')} className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all duration-300 ${activeTab === 'conges' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'}`}>الكونجيات</button>
        </div>
      </header>

      <main className="p-6 max-w-7xl mx-auto">
        {activeTab === 'planning' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {rtgs.map((rtg) => (
              <div key={rtg.id} className="bg-[#1e1e1e] rounded-2xl overflow-hidden border border-gray-800 shadow-2xl hover:border-blue-500/50 transition-all group">
                <div className="relative h-40 overflow-hidden">
                  <img src={rtg.img} alt={rtg.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1e1e1e] to-transparent"></div>
                  <span className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold ${rtg.status === 'Active' ? 'bg-green-500/20 text-green-400' : 'bg-orange-500/20 text-orange-400'}`}>{rtg.status}</span>
                  <h2 className="absolute bottom-3 left-4 text-2xl font-black">{rtg.name}</h2>
                </div>
                <div className="p-5 space-y-4">
                  <div>
                    <label className="block text-xs text-gray-400 mb-1.5 font-semibold">الشيفور (Operator)</label>
                    <input type="text" value={rtg.operator} onChange={(e) => handleNameChange(rtg.id, 'operator', e.target.value)} className="w-full bg-[#121212] border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500" />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-400 mb-1.5 font-semibold">المساعد (Partner)</label>
                    <input type="text" value={rtg.partner} onChange={(e) => handleNameChange(rtg.id, 'partner', e.target.value)} className="w-full bg-[#121212] border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'conges' && (
           <div className="bg-[#1e1e1e] rounded-2xl border border-gray-800 shadow-2xl overflow-hidden">
             <div className="p-6 border-b border-gray-800 bg-[#121212]/50">
               <h2 className="text-xl font-bold text-white flex items-center gap-2">🌴 لائحة الكونجيات</h2>
             </div>
             <div className="overflow-x-auto text-left">
               <table className="w-full border-collapse">
                 <thead>
                   <tr className="bg-black/40 text-gray-400 text-sm uppercase">
                     <th className="p-5 font-semibold">الاسم</th>
                     <th className="p-5 font-semibold">تاريخ الذهاب</th>
                     <th className="p-5 font-semibold">تاريخ العودة</th>
                     <th className="p-5 font-semibold">النوع</th>
                   </tr>
                 </thead>
                 <tbody className="divide-y divide-gray-800">
                   {conges.map((c) => (
                     <tr key={c.id} className="hover:bg-gray-800/50">
                       <td className="p-5 font-bold text-white text-lg">{c.name}</td>
                       <td className="p-5 text-gray-300">{c.depart}</td>
                       <td className="p-5 text-gray-300">{c.retour}</td>
                       <td className="p-5"><span className="bg-blue-500/10 text-blue-400 border border-blue-500/20 px-3 py-1 rounded-lg text-sm">{c.type}</span></td>
                     </tr>
                   ))}
                 </tbody>
               </table>
             </div>
           </div>
        )}
      </main>
    </div>
  );
}

// هاد الجزء هو اللي كان ناقص باش يشعل السيت
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
