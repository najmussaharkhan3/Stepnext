import { NavLink, useNavigate } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa"; // icon
import "./Sidebar.css";
import logo from "../../assets/logo.png";

export default function Sidebar({ isOpen, closeSidebar }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // Token remove
    navigate("/admin/login"); // Redirect to login
    closeSidebar(); // Close sidebar if open
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      {/* Mobile Close Button */}
      <button className="sidebar-close-btn" onClick={closeSidebar}>
        ✕
      </button>

      {/* LOGO */}
      <div className="sidebar-logo">
        <img src={logo} alt="STEP NEXT EDGE" />
      </div>

      {/* LINKS */}
      <nav className="sidebar-nav">
        <NavLink to="/admin/dashboard" onClick={closeSidebar}>Dashboard</NavLink>
        <NavLink to="/admin/categories" onClick={closeSidebar}>Categories</NavLink>
        <NavLink to="/admin/products" onClick={closeSidebar}>Products</NavLink>

        {/* LOGOUT BUTTON */}
        <button
          onClick={handleLogout}
          className="sidebar-logout-btn"
        >
          <FaSignOutAlt style={{ marginRight: "8px" }} />
          Logout
        </button>
      </nav>
    </div>
  );
}