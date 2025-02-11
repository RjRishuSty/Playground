import { useState } from "react";
import { productList } from "../../utils/products";

const Product = () => {
  const [filteredProduct, setFilteredProduct] = useState(productList);
  const categoryArr = ["All", "Electronics", "Clothing", "Home"];

  const handleFilter = (e) => {
    if (e.target.value === "All") {
      setFilteredProduct(productList);
    } else {
      const filteredList = productList.filter(
        (product) => product.category === e.target.value
      );
      setFilteredProduct(filteredList);
    }
  };

  return (
    <div className="main-product-container">
      <div className="filter-container">
        <h2>Filters</h2>
        <br />
        Category
        <div className="category-container">
          {categoryArr.map((category, index) => (
            <div key={index} className="category-items">
              <input
                id={category}
                onChange={handleFilter}
                type="radio"
                name="category"
                value={category}
                defaultChecked={category === "All"}
              />
              <label htmlFor={category}>{category}</label>
            </div>
          ))}
        </div>
      </div>
      <div className="product-container">
        {filteredProduct?.map(({ name, price, category }, index) => (
          <div key={index} className="product-card">
            <div className="product-items">{name}</div>
            <span className="product-items">{category}</span>
            <div className="product-items">Rs {price}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
