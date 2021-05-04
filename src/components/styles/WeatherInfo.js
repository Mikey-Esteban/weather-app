import styled from "styled-components";

const MainWrapper = styled.div`
  width: 300px;

  padding: 10px 20px;
  margin-top: 20px;

  background-color: rgba(0, 0, 0, 0.4);
  color: white;

  span {
    font-size: 12px;
  }
`;

const HeaderWrapper = styled.div`
  display: flex;

  flex-direction: column;

  img {
    height: 96px;
    width: 96px;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
`;

const TempWrapper = styled.div`
  display: flex;
  justify-content: space-around;

  h1 {
    font-size: 32px;
  }

  #sideTemp {
    display: flex;
    flex-direction: column;
  }
`;

const TimeWrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin: 20px;
`;

export { MainWrapper, HeaderWrapper, ImageWrapper, TempWrapper, TimeWrapper };
