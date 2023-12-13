import { MainContent } from '@/ui/dashboard/mainContent';
import Sidebar from '@/ui/dashboard/sidebar';
import React from 'react';

interface DashboardLayoutProps {
  children: React.ReactNode
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-100 -mx-16">
      <Sidebar />
      <MainContent>{children}</MainContent>
    </div>
  );
};

export default DashboardLayout;