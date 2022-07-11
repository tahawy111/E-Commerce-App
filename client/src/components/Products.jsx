import { useEffect, useState } from "react";
import styled from "styled-components";
// import { popularProducts } from '../data';
import axios from "axios";
import Product from "./Product";

const Container = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 593px) {
    & {
      justify-content: center;
    }
  }
`;

const Products = ({ sort, cat, filters }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setfilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await axios.get(
          cat
            ? `http://localhost:5000/api/products?category=${cat}`
            : "http://localhost:5000/api/products"
        );
        setProducts(data);
      } catch (err) {}
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    setfilteredProducts(
      cat
        ? products.filter((item) =>
            Object.entries(filters).every(([key, value]) =>
              item[key].includes(value)
            )
          )
        : products.slice(0, 8)
    );
  }, [cat, products, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setfilteredProducts((prev) =>
        prev.sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setfilteredProducts((prev) => prev.sort((a, b) => a.price - b.price));
    } else {
      setfilteredProducts((prev) => prev.sort((a, b) => b.price - a.price));
    }
  }, [sort]);

  return (
    <Container>
      {filteredProducts.map((item) => (
        <Product item={item} />
      ))}
    </Container>
  );
};

export default Products;
