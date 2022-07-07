import styled from "styled-components";
import { categories } from "../data.js";
import CategoryItem from "./CategoryItem.jsx";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  @media (max-width: 596px) {
    display: flex;
    flex-direction: column;
  }
`;

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem key={item.id} item={item} />
      ))}
    </Container>
  );
};

export default Categories;
