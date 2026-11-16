import React, { useState } from "react";
import Sidebar from "./Sidebar";
import "./AdminGlobal.css";
import "./AdminLayout.css";

export default function AdminLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="admin-layout">
      {/* Mobile Header (Visible only on mobile) */}
      <div className="admin-mobile-header">
        <button className="admin-mobile-toggle" onClick={toggleSidebar}>
          ☰ Menu
        </button>
        <span className="admin-mobile-title">StepNext Edge Admin</span>
      </div>

      {/* Sidebar Overlay for Mobile */}
      {isSidebarOpen && (
        <div className="admin-sidebar-overlay" onClick={toggleSidebar}></div>
      )}

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} closeSidebar={() => setIsSidebarOpen(false)} />

      {/* Main Content */}
      <div className="admin-main">
        <div className="admin-page-container">
          {children}
        </div>
      </div>
    </div>
  );
}