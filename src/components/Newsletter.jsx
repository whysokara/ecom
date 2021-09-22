import { Send } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  background-color: #fcf5f5;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 70px;
`;
const Desc = styled.span`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
`;
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
`;
const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;

  &:focus {
    outline: none;
  }
`;
const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Be the first one to know when your favourite product arrives.</Desc>
      <InputContainer>
        <Input placeholder="Enter your email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
