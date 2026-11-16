import React, { useEffect, useState } from "react";
import api from "../../utils/api";
import "./Dashboard.css";

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalProducts: 0,
    totalCategories: 0,
    recentProducts: [],
  });

  useEffect(() => {
    const loadStats = async () => {
      try {
        const res = await api.get("/dashboard-stats");
        setStats(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    loadStats();
  }, []);

  return (
    <>
      <div className="admin-page-header">
        <h1 className="admin-page-title">Dashboard Overview</h1>
      </div>

      {/* Stats Cards */}
      <div className="dashboard-stats-grid">
        <div className="admin-card stat-card" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <span className="stat-card-title">Total Categories</span>
            <div className="stat-card-value">{stats.totalCategories}</div>
          </div>
          <div style={{ background: "#EFF6FF", padding: "12px", borderRadius: "50%", color: "var(--admin-primary)", display: "flex" }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </div>
        </div>

        <div className="admin-card stat-card" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <span className="stat-card-title">Total Products</span>
            <div className="stat-card-value">{stats.totalProducts}</div>
          </div>
          <div style={{ background: "#FEF2F2", padding: "12px", borderRadius: "50%", color: "var(--admin-danger)", display: "flex" }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
          </div>
        </div>
      </div>

      {/* Recent Products */}
      <div className="admin-card">
        <h2 className="dashboard-section-title">Recent Products</h2>
        <div className="admin-table-wrapper">
          <table className="admin-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Category ID</th>
              </tr>
            </thead>
            <tbody>
              {stats.recentProducts.length === 0 ? (
                <tr>
                  <td colSpan="3" className="admin-table-empty">No recent products found.</td>
                </tr>
              ) : (
                stats.recentProducts.map((p) => (
                  <tr key={p.id}>
                    <td>#{p.id}</td>
                    <td>{p.name}</td>
                    <td>{p.category_id}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
