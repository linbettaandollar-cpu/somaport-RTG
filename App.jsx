
export default function App() {
  const shifts = [
    { crane: "RTG 01", operator: "Farih", partner: "Rmaili", shift: "Day Shift", status: "Active" },
    { crane: "RTG 02", operator: "Mandour", partner: "Banhadrya", shift: "Day Shift", status: "Active" },
    { crane: "RTG 03", operator: "Amin", partner: "Ousama", shift: "Day Shift", status: "Active" },
    { crane: "RTG 04", operator: "Anbry", partner: "Asli", shift: "Night Shift", status: "Pending" },
    { crane: "RTG 05", operator: "Bentata", partner: "Madak", shift: "Night Shift", status: "Pending" },
    { crane: "RTG 06", operator: "Jaaouiani", partner: "Errakhmi", shift: "Night Shift", status: "Completed" },
    { crane: "RTG 07", operator: "Lamnabbah", partner: "Ramadan", shift: "Night Shift", status: "Completed" },
    { crane: "RTG 08", operator: "Zaoui", partner: "Mabsout", shift: "Day Shift", status: "Active" },
  ];

  const statusStyle = {
    Active: "bg-green-500/20 text-green-300 border border-green-500/30",
    Pending: "bg-yellow-500/20 text-yellow-300 border border-yellow-500/30",
    Completed: "bg-blue-500/20 text-blue-300 border border-blue-500/30",
  };

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white p-6 md:p-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
          <div>
            <p className="uppercase tracking-[0.3em] text-sm text-gray-400 mb-2">
              RTG OPERATIONS
            </p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Smart Planning
              <span className="block text-gray-400">Dashboard</span>
            </h1>
          </div>

          <div className="bg-[#171717] border border-white/10 rounded-3xl px-6 py-5 w-full md:w-80 shadow-2xl">
            <p className="text-gray-400 text-sm mb-2">Today Schedule</p>
            <h2 className="text-3xl font-bold">(8) RTG</h2>
            <div className="mt-4 flex items-center justify-between text-sm text-gray-300">
              <span>Sunday 10 / 05 / 2026</span>
              <span>Port Operations</span>
            </div>
          </div>
        </div>

        <div className="bg-[#151515] rounded-[32px] border border-white/5 overflow-hidden shadow-2xl">
          <div className="flex items-center justify-between px-6 py-5 border-b border-white/5">
            <div>
              <h2 className="text-2xl font-semibold">Daily RTG Planning</h2>
              <p className="text-gray-400 text-sm mt-1">
                Operations and shift management
              </p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px]">
              <thead>
                <tr className="text-left text-gray-400 text-sm border-b border-white/5">
                  <th className="px-6 py-4 font-medium">RTG</th>
                  <th className="px-6 py-4 font-medium">Operator</th>
                  <th className="px-6 py-4 font-medium">Partner</th>
                  <th className="px-6 py-4 font-medium">Shift</th>
                  <th className="px-6 py-4 font-medium">Status</th>
                </tr>
              </thead>

              <tbody>
                {shifts.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b border-white/5 hover:bg-white/[0.02] transition-colors"
                  >
                    <td className="px-6 py-5 font-semibold">{item.crane}</td>
                    <td className="px-6 py-5 text-gray-300">{item.operator}</td>
                    <td className="px-6 py-5 text-gray-300">{item.partner}</td>
                    <td className="px-6 py-5 text-gray-300">{item.shift}</td>
                    <td className="px-6 py-5">
                      <span
                        className={`px-4 py-2 rounded-full text-xs font-semibold ${statusStyle[item.status]}`}
                      >
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#151515] rounded-3xl p-6 border border-white/5">
            <h3 className="text-xl font-semibold mb-4">Operations Notes</h3>
            <p className="text-gray-400 leading-7">
              Congé: Balhawi (Sorti) Monday
              <br />
              Entré Monday 3EM
            </p>
          </div>

          <div className="bg-gradient-to-br from-white to-gray-300 text-black rounded-3xl p-6 shadow-2xl">
            <p className="uppercase tracking-[0.3em] text-xs mb-3">
              Smart System
            </p>
            <h3 className="text-3xl font-bold leading-tight mb-3">
              Modern Planning Interface
            </h3>
            <p className="text-black/70 leading-7">
              Inspired by Bamboo modern dashboard style.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
