
const Dashboard = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-cyan-400 mb-6">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
          <h3 className="text-slate-400 text-sm font-medium">Total Applied</h3>
          <p className="text-3xl font-bold text-slate-100 mt-2">12</p>
        </div>
        
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
          <h3 className="text-slate-400 text-sm font-medium">Interviews</h3>
          <p className="text-3xl font-bold text-blue-400 mt-2">3</p>
        </div>
        
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
          <h3 className="text-slate-400 text-sm font-medium">Pending Jobs</h3>
          <p className="text-3xl font-bold text-yellow-400 mt-2">8</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
