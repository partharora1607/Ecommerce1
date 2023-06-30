import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Products from "../components/Products";

const Container = styled.div``;

const Title = styled.h1`
  margin: 10px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 10px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
`;

const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Products</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
