import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Announcements = () => {
  return <Container>Super deal!! Free shipping on orders above $50</Container>;
};

export default Announcements;
