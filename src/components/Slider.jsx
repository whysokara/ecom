import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  /* height: cal(100vh-90px);    */
  /* height: calc(100vh - 90px); */
  display: flex;
  /* background-color: coral; */
  position: relative;
`;

const Wrapper = styled.div`
  height: 100%;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
`;
const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;
const Image = styled.img`
  height: 80%;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`;
const Desc = styled.p`
  margin: 50px 0;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
`;

const Slider = () => {
  return (
    <Container>
      <Arrow direction="left">
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper>
        <Slide>
          <ImgContainer>
            <Image src="https://i.ibb.co/XsdmR2c/1.png"></Image>
          </ImgContainer>
          <InfoContainer>
            <Title>SUMMER SALE ⛱</Title>
            <Desc>
              Ready for the Summer Season? <br /> GET 70% OFF on all summer
              collection.
            </Desc>
            <Button>Shop Now!</Button>
          </InfoContainer>
        </Slide>
      </Wrapper>
      <Arrow direction="right">
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
