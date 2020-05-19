import React, { useState } from "react";
import "../styles/Section.css";
import API from "../utils/API";

const styles = {
  sectionStyles: {
    background: "white",
  },
};

// We use JSX curly braces to evaluate the style object on the JSX tag

function ProductCard({ product, index, handleAddToCart }) {
  return (
    <div className="product" key={index}>
      {product.name} ${product.regularPrice}
      <button value={product.sku} onClick={handleAddToCart}>
        add to cart
      </button>
    </div>
  );
}

function Section() {
  const [products, setProducts] = useState([]);
  const [productSearch, setProductSearch] = useState("");
  const [cart, setCart] = useState([]);

  const handleAddToCart = (event) => {
    event.preventDefault();
    const value = event.target.value;
    console.log(value);
  };

  const handleInputChange = (event) => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { value } = event.target;
    setProductSearch(value);
    console.log(productSearch);
  };

  const handleFormSubmit = (event) => {
    // When the form is submitted, prevent its default behavior, get recipes update the recipes state
    event.preventDefault();
    API.getProducts(productSearch)
      .then((res) => setProducts(res.data.products))
      // .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };
  return (
    <div style={styles.sectionStyles} className="section">
      <h2>Commerce Application</h2>
      <input value={productSearch} onChange={handleInputChange}></input>
      <button onClick={handleFormSubmit}>Search</button>
      <div className="product-list">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            index={index}
            product={product}
            handleAddToCart={handleAddToCart}
          ></ProductCard>
        ))}
      </div>
    </div>
  );
}

export default Section;
