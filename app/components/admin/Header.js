"use client";

import { Bell, Search, Menu } from "lucide-react";
import Image from "next/image";

export default function Header() {
  return (
    <header className="h-16 flex-shrink-0 border-b border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl sticky top-0 z-30 flex items-center justify-between px-4 sm:px-6 transition-colors duration-300">
      <div className="flex items-center flex-1 gap-4">
        <button className="p-2 md:hidden text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
          <Menu size={20} />
        </button>
        
        <div className="max-w-md w-full relative hidden sm:block">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search size={16} className="text-gray-400" />
          </div>
          <input 
            type="text" 
            placeholder="Search anything..." 
            className="block w-full pl-10 pr-3 py-2 border-none rounded-xl bg-gray-100 dark:bg-gray-800/50 text-gray-900 dark:text-gray-100 text-sm focus:ring-2 focus:ring-blue-500 focus:bg-white dark:focus:bg-gray-800 transition-all placeholder-gray-400"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <button className="relative p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors">
          <Bell size={20} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white dark:border-gray-900"></span>
        </button>
        
        <div className="h-8 w-px bg-gray-200 dark:bg-gray-800 mx-1"></div>
        
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex flex-col items-end">
            <span className="text-sm font-medium text-gray-900 dark:text-gray-100">Jane Doe</span>
            <span className="text-xs text-gray-500 dark:text-gray-400">Admin</span>
          </div>
          <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 border-2 border-white dark:border-gray-800 shadow-sm overflow-hidden flex items-center justify-center relative cursor-pointer">
             <div className="text-sm font-bold text-blue-700 dark:text-blue-400">JD</div>
          </div>
        </div>
      </div>
    </header>
  );
}
