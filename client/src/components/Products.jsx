import { useEffect, useState } from 'react';
import styled from 'styled-components';
// import { popularProducts } from '../data';
import axios from 'axios';
import Product from './Product';

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
  console.log({ sort, cat, filters });
  const [products, setProducts] = useState([]);
  const [filteredProducts, setfilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await axios.get(
          cat
            ? `http://localhost:5000/api/products?category=${cat}`
            : 'http://localhost:5000/api/products'
        );
        setProducts(data);
        console.log(data);
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
        : products
    );
  }, [cat, products, filters]);

  return (
    <Container>
      {products.map((item) => (
        <Product item={item} />
      ))}
    </Container>
  );
};

export default Products;
