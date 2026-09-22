import Sidebar from "../components/admin/Sidebar";
import Header from "../components/admin/Header";

export const metadata = {
  title: "Admin Dashboard",
  description: "Admin area for managing the application",
};

export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex dark:bg-gray-950 dark:text-gray-100 transition-colors duration-300">
      <Sidebar />
      <div className="flex-1 flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 p-6 md:p-8 lg:p-10 max-w-7xl mx-auto w-full">
          {children}
        </main>
      </div>
    </div>
  );
}
