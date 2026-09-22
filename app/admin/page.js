import StatCard from "../components/admin/StatCard";
import { Users, DollarSign, Active, Activity, ShoppingBag } from "lucide-react";

export const metadata = {
  title: "Admin Overview",
};

export default function AdminOverview() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 tracking-tight">Overview</h1>
        <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">Here is what's happening with your projects today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Total Revenue" 
          value="$45,231.89" 
          change="+20.1%" 
          isIncrease={true} 
          icon={DollarSign} 
        />
        <StatCard 
          title="Active Users" 
          value="2,350" 
          change="+15.2%" 
          isIncrease={true} 
          icon={Users} 
        />
        <StatCard 
          title="Sales" 
          value="+12,234" 
          change="+19%" 
          isIncrease={true} 
          icon={ShoppingBag} 
        />
        <StatCard 
          title="Active Now" 
          value="573" 
          change="-4%" 
          isIncrease={false} 
          icon={Activity} 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Revenue Overview</h2>
          <div className="h-64 flex items-center justify-center rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-dashed border-gray-200 dark:border-gray-700">
            <span className="text-gray-400 dark:text-gray-500 font-medium flex items-center gap-2">
              <Activity size={18} /> Chart Placeholder
            </span>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <Users size={16} />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-gray-100">New user registered</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{i * 2} hours ago</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
