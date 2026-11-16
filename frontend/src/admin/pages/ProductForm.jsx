import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api, { apiMultipart } from "../../utils/api";
import { fetchCategories } from "../../utils/category";
import "./ProductForm.css";

const ProductForm = ({ mode = "create", productId = null }) => {
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState("");

  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [modelYear, setModelYear] = useState("");
  const [engine, setEngine] = useState("");
  const [transmission, setTransmission] = useState("");
  const [color, setColor] = useState("");
  const [mileage, setMileage] = useState("");
  const [fuelType, setFuelType] = useState("");
  const [loadCapacity, setLoadCapacity] = useState("");
  const [price, setPrice] = useState("");

  const [images, setImages] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch categories
  useEffect(() => {
    fetchCategories()
      .then(setCategories)
      .catch(() => setError("Failed to load categories"));
  }, []);

  // Load product (edit mode)
  useEffect(() => {
    if (mode === "edit" && productId) {
      api.get(`/products/${productId}`)
        .then((res) => {
          const p = res.data;
          setCategoryId(p.category_id || "");
          setMake(p.make || "");
          setModel(p.model || "");
          setModelYear(p.model_year || "");
          setEngine(p.engine || "");
          setTransmission(p.transmission || "");
          setColor(p.color || "");
          setMileage(p.mileage || "");
          setFuelType(p.fuel_type || "");
          setLoadCapacity(p.load_capacity || "");
          setPrice(p.price || "");
          setImagePreviews(p.images || []);
        })
        .catch(() => setError("Failed to load product"));
    }
  }, [mode, productId]);

  // ✅ IMAGE VALIDATION (MAIN FIX)
  const handleImages = (e) => {
    const files = Array.from(e.target.files);

    // max limit check
    if (files.length > 7) {
      setError("Max 7 images allowed. Only JPG, JPEG, PNG formats are allowed.");
      return;
    }

    // format check
    const allowedFormats = ["image/jpeg", "image/jpg", "image/png"];

    const invalidFiles = files.filter(
      (file) => !allowedFormats.includes(file.type)
    );

    if (invalidFiles.length > 0) {
      setError("Only JPG, JPEG, PNG images are allowed (Max 7 images)");
      return;
    }

    setImages(files);
    setImagePreviews(files.map((f) => URL.createObjectURL(f)));

    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!categoryId) {
      setError("Please select a category");
      return;
    }

    const formData = new FormData();

    formData.append("category_id", categoryId);
    formData.append("make", make);
    formData.append("model", model);
    formData.append("model_year", parseInt(modelYear) || 0);
    formData.append("engine", engine);
    formData.append("transmission", transmission);
    formData.append("color", color);
    formData.append("mileage", mileage);
    formData.append("fuel_type", fuelType);
    formData.append("load_capacity", loadCapacity);
    formData.append("price", parseFloat(price) || 0);

    // images append
    if (images.length > 0) {
      images.forEach((img) => formData.append("images[]", img));
    }

    try {
      setLoading(true);

      if (mode === "create") {
        await apiMultipart("/products", formData);
      } else {
        formData.append("_method", "PUT");
        await apiMultipart(`/products/${productId}`, formData);
      }

      navigate("/admin/products");
    } catch (err) {
      console.log(err.response?.data);
      setError("Failed to save product");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-card admin-form-card">
      <h2 className="admin-form-title">
        {mode === "create" ? "Create Product" : "Edit Product"}
      </h2>

      {error && <div className="admin-alert-error">{error}</div>}

      <form className="form" onSubmit={handleSubmit}>

        {/* CATEGORY */}
        <div className="form-group full">
          <label>Category</label>
          <select value={categoryId} onChange={(e) => setCategoryId(e.target.value)} required>
            <option value="">Select Category</option>
            {categories.map((c) => (
              <option key={c.id} value={c.id}>{c.name}</option>
            ))}
          </select>
        </div>

        {/* BASIC */}
        <div className="form-group">
          <label>Make</label>
          <input
            placeholder="e.g. Toyota, Honda"
            value={make}
            onChange={(e) => setMake(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Model</label>
          <input
            placeholder="e.g. Corolla, Civic"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Model Year</label>
          <input
            placeholder="e.g. 2022"
            value={modelYear}
            onChange={(e) => setModelYear(e.target.value)}
            required
          />
        </div>

        {/* DETAILS */}
        <div className="form-group">
          <label>Engine</label>
          <input
            placeholder="e.g. 1300cc / 1800cc"
            value={engine}
            onChange={(e) => setEngine(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Transmission</label>
          <input
            placeholder="e.g. Automatic / Manual"
            value={transmission}
            onChange={(e) => setTransmission(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Fuel Type</label>
          <input
            placeholder="e.g. Petrol, Diesel, Hybrid"
            value={fuelType}
            onChange={(e) => setFuelType(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Color</label>
          <input
            placeholder="e.g. White, Black, Grey"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Specs</label>
          <input
            placeholder="e.g. 50,000 km or engine specs"
            value={mileage}
            onChange={(e) => setMileage(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Load Capacity</label>
          <input
            placeholder="e.g. 1000 kg"
            value={loadCapacity}
            onChange={(e) => setLoadCapacity(e.target.value)}
          />
        </div>

        {/* PRICE */}
        <div className="form-group full">
          <label>Price</label>
          <input
            placeholder="e.g. 2500000 PKR"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        {/* IMAGES */}
        <div className="form-group full">
          <label>Upload Images (Max 7 | JPG, JPEG, PNG)</label>
          <input
            type="file"
            multiple
            accept="image/png, image/jpeg, image/jpg"
            onChange={handleImages}
          />
        </div>

        {/* PREVIEW */}
        <div className="preview">
          {imagePreviews.map((img, index) => (
            <img key={index} src={img} alt="preview" width="80" />
          ))}
        </div>

        <div className="form-actions">
          <button className="submit-btn" disabled={loading}>
            {loading ? "Saving..." : "Save Product"}
          </button>
        </div>

      </form>
    </div>
  );
};

export default ProductForm;