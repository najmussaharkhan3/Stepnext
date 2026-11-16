import React, { useEffect, useState } from "react";
import {
  fetchCategories,
  addCategory,
  updateCategory,
  deleteCategory,
} from "../../utils/category";
import "./Categories.css";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState("");
  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState("");
  const [loadingAdd, setLoadingAdd] = useState(false);
  const [loadingEdit, setLoadingEdit] = useState(false);
  const [error, setError] = useState("");

  // 🔥 Load categories on mount
  useEffect(() => {
    loadCategories();
  }, []);

  // Fetch all categories
  const loadCategories = async () => {
    try {
      const data = await fetchCategories();
      setCategories(data);
    } catch (err) {
      console.error(err.response || err);
      setError(err.response?.data?.message || "❌ Failed to fetch categories");
    }
  };

  // ➕ Add new category
  const handleAdd = async () => {
    if (!newCategory) return;
    try {
      setLoadingAdd(true);
      await addCategory(newCategory);
      setNewCategory("");
      loadCategories();
    } catch (err) {
      console.error(err.response || err);
      setError(err.response?.data?.message || "❌ Add failed");
    } finally {
      setLoadingAdd(false);
    }
  };

  // ✏️ Edit category
  const handleEdit = async (id) => {
    if (!editName) return;
    try {
      setLoadingEdit(true);
      await updateCategory(id, editName);
      setEditId(null);
      setEditName("");
      loadCategories();
    } catch (err) {
      console.error(err.response || err);
      setError(err.response?.data?.message || "❌ Update failed");
    } finally {
      setLoadingEdit(false);
    }
  };

  // ❌ Delete category
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this category?")) return;
    try {
      await deleteCategory(id);
      loadCategories();
    } catch (err) {
      console.error(err.response || err);
      setError(err.response?.data?.message || "❌ Delete failed");
    }
  };

  return (
    <>
      <div className="admin-page-header">
        <h1 className="admin-page-title">Categories</h1>
      </div>

      <div className="admin-card">
        {error && <div className="admin-alert-error">{error}</div>}

        {/* ADD */}
        <div className="categories-form-inline">
          <input
            type="text"
            className="categories-input"
            placeholder="New category name..."
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
          />
          <button
            className="admin-btn admin-btn-primary"
            onClick={handleAdd}
            disabled={loadingAdd}
          >
            {loadingAdd ? "Adding..." : "+ Add Category"}
          </button>
        </div>

        {/* TABLE */}
        <div className="admin-table-wrapper">
          <table className="admin-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th style={{ width: "180px" }}>Actions</th>
              </tr>
            </thead>

            <tbody>
              {categories.length === 0 ? (
                <tr>
                  <td colSpan="3" className="admin-table-empty">
                    No Data Found
                  </td>
                </tr>
              ) : (
                categories.map((cat) => (
                  <tr key={cat.id}>
                    <td>#{cat.id}</td>

                    <td>
                      {editId === cat.id ? (
                        <input
                          className="categories-input"
                          value={editName}
                          onChange={(e) => setEditName(e.target.value)}
                        />
                      ) : (
                        cat.name
                      )}
                    </td>

                    <td>
                      {editId === cat.id ? (
                        <div className="admin-table-actions">
                          <button
                            className="admin-btn admin-btn-success admin-btn-icon"
                            onClick={() => handleEdit(cat.id)}
                            disabled={loadingEdit}
                          >
                            {loadingEdit ? "Saving..." : "Save"}
                          </button>

                          <button
                            className="admin-btn admin-btn-gray admin-btn-icon"
                            onClick={() => {
                              setEditId(null);
                              setEditName("");
                            }}
                          >
                            Cancel
                          </button>
                        </div>
                      ) : (
                        <div className="admin-table-actions">
                          <button
                            className="admin-btn admin-btn-blue admin-btn-icon"
                            onClick={() => {
                              setEditId(cat.id);
                              setEditName(cat.name);
                            }}
                          >
                            Edit
                          </button>

                          <button
                            className="admin-btn admin-btn-red admin-btn-icon"
                            onClick={() => handleDelete(cat.id)}
                          >
                            Delete
                          </button>
                        </div>
                      )}
                    </td>
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

export default Categories;