import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useNavigate } from "react-router-dom";
import cd1 from "../assets/images/cd1.jpg";
import mug from "../assets/images/mug.jpg";
import frame1 from "../assets/images/frame1.jpg";
import ts1 from "../assets/images/ts1.jpg";

const Dashboard = () => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [theme, setTheme] = useState("light");
  const [fontSize, setFontSize] = useState("16px");
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const categories = ["All", "Mugs", "T-Shirts", "Photo Frames", "Custom Cards"];
  const products = {
    Mugs: [
      { id: 1, name: "Custom Mug 1", price: 15, description: "Customizable mug.", image: mug },
    ],
    "T-Shirts": [
      { id: 2, name: "Personalized T-Shirt", price: 25, description: "Customize your own T-shirt.", image: ts1 },
    ],
    "Photo Frames": [
      { id: 3, name: "Photo Frame 1", price: 30, description: "Beautiful wooden photo frame.", image: frame1 },
    ],
    "Custom Cards": [
      { id: 4, name: "Custom Card 1", price: 10, description: "Personalized greeting card.", image: cd1 },
    ],
  };

  const filteredProducts =
    selectedCategory === "All"
      ? Object.values(products).flat()
      : products[selectedCategory] || [];

  const handleThemeChange = () => setTheme((prev) => (prev === "light" ? "dark" : "light"));
  const handleAddToCart = (product) => setCart((prevCart) => [...prevCart, product]);
  const handleProductClick = (product) => navigate(`/productdetails/${product.id}`);

  return (
    <div
      className="container-fluid"
      style={{
        fontSize: fontSize,
        backgroundColor: theme === "light" ? "#f9f9f9" : "#333",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      {/* Fixed Header */}
      <header
        className="fixed-top d-flex justify-content-between align-items-center p-3 bg-primary text-white"
        style={{ zIndex: "9999" }}
      >
        <div className="logo" style={{ fontSize: "24px", fontWeight: "bold" }}>
          Fawn & Feather
        </div>
        <div className="d-flex">
          <input
            type="text"
            placeholder="Search..."
            className="form-control me-2"
            style={{ width: "200px" }}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select
            className="form-select me-2"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            style={{ width: "150px" }}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </header>

      {/* Gap between Header and Carousel */}
      <div style={{ paddingTop: "80px" }}></div>

      {/* Carousel */}
      <div id="carouselExampleCaptions" className="carousel slide mb-4" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={mug} className="d-block w-100" alt="Mugs" style={{ height: "300px", objectFit: "cover" }} />
            <div className="carousel-caption d-none d-md-block">
              <h5>Mugs</h5>
              <p>Explore our customizable mugs collection.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={cd1} className="d-block w-100" alt="Custom Cards" style={{ height: "300px", objectFit: "cover" }} />
            <div className="carousel-caption d-none d-md-block">
              <h5>Custom Cards</h5>
              <p>Personalized greeting cards for every occasion.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={ts1} className="d-block w-100" alt="T-Shirts" style={{ height: "300px", objectFit: "cover" }} />
            <div className="carousel-caption d-none d-md-block">
              <h5>T-Shirts</h5>
              <p>Design your own custom T-shirts.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={frame1} className="d-block w-100" alt="Photo Frames" style={{ height: "300px", objectFit: "cover" }} />
            <div className="carousel-caption d-none d-md-block">
              <h5>Photo Frames</h5>
              <p>Beautiful photo frames for your memories.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>

      {/* Cards Section */}
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {filteredProducts.map((product) => (
          <div key={product.id} className="col mb-4">
            <div className="card h-100">
              <img src={product.image} className="card-img-top" alt={product.name} style={{ height: "200px", objectFit: "cover" }} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <button className="btn btn-primary" onClick={() => handleAddToCart(product)}>
                  Add to Cart
                </button>
                <button className="btn btn-link" onClick={() => handleProductClick(product)}>
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
