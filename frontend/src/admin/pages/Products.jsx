// src/admin/pages/products/Products.js
import React, { useEffect, useState } from "react";
import api from "../../utils/api";
import { fetchCategories } from "../../utils/category";
import { Link } from "react-router-dom";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const loadProducts = async () => {
    try {
      setLoading(true);
      const res = await api.get("/products");
      setProducts(res.data);
    } catch (err) {
      setError("Failed to fetch products");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const loadCats = async () => {
      const data = await fetchCategories();
      setCategories(data);
    };
    loadCats();
    loadProducts();
  }, []);

  const getCategoryName = (id) => {
    const cat = categories.find((c) => c.id === id);
    return cat ? cat.name : "-";
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this product?")) return;
    await api.delete(`/products/${id}`);
    loadProducts();
  };

  return (
    <>
      <div className="admin-page-header">
        <h1 className="admin-page-title">Products</h1>
        <Link to="/admin/products/create" className="admin-btn admin-btn-primary">
          + Add Product
        </Link>
      </div>

      <div className="admin-card">
        {error && <div className="admin-alert-error">{error}</div>}

        {loading ? (
          <p style={{ textAlign: "center", color: "#999" }}>Loading products...</p>
        ) : (
          <div className="admin-table-wrapper">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Image</th>
                  <th>Category</th>
                  <th>Make</th>
                  <th>Model</th>
                  <th>Year</th>
                  <th>Engine</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.length === 0 ? (
                  <tr>
                    <td colSpan="8" className="admin-table-empty">No Products Found</td>
                  </tr>
                ) : (
                  products.map((p) => (
                    <tr key={p.id}>
                      <td>#{p.id}</td>
                      <td>{p.images?.[0] ? <img src={p.images[0]} alt="" width="80" /> : "-"}</td>
                      <td>{getCategoryName(p.category_id)}</td>
                      <td>{p.make}</td>
                      <td>{p.model}</td>
                      <td>{p.model_year}</td>
                      <td>{p.engine}</td>
                      <td>
                        <div className="admin-table-actions">
                          <Link to={`/admin/products/edit/${p.id}`} className="admin-btn admin-btn-blue">Edit</Link>
                          <button onClick={() => handleDelete(p.id)} className="admin-btn admin-btn-red">Delete</button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
};

export default Products;