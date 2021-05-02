import styled from "styled-components";

const MainWrapper = styled.div`
  span {
    font-size: 12px;
  }
`;

const TempWrapper = styled.div`
  display: flex;

  #sideTemp {
    display: flex;
    flex-direction: column;
  }
`;

const TimeWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export { MainWrapper, TempWrapper, TimeWrapper };
