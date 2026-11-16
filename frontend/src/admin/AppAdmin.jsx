import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Categories from "./pages/Categories";
import Products from "./pages/Products";
import ProductCreate from "./pages/ProductCreate";
import ProductEdit from "./pages/ProductEdit";
import ProtectedRoute from "./layout/ProtectedRoute";
import AdminLayout from "./layout/AdminLayout";

export default function AppAdmin() {
  return (
    <Routes>
      {/* Public route */}
      <Route path="/admin/login" element={<Login />} />

      {/* Protected admin routes */}
      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute>
            <AdminLayout>
              <Dashboard />
            </AdminLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/categories"
        element={
          <ProtectedRoute>
            <AdminLayout>
              <Categories />
            </AdminLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/products"
        element={
          <ProtectedRoute>
            <AdminLayout>
              <Products />
            </AdminLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/products/create"
        element={
          <ProtectedRoute>
            <AdminLayout>
              <ProductCreate />
            </AdminLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/products/edit/:id"
        element={
          <ProtectedRoute>
            <AdminLayout>
              <ProductEdit />
            </AdminLayout>
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}