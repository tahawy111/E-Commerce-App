import styled from 'styled-components';
import { popularProducts } from '../data';
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

const Products = () => {
  return (
    <Container>
      {popularProducts.map((item) => (
        <Product item={item} />
      ))}
    </Container>
  );
};

export default Products;
