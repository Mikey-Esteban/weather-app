import styled from "styled-components";

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  font-size: 14px;

  &::after {
    content: "";
    background: url(${props => props.background});
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: center-top;
    background-size: cover;
    opacity: 0.5;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
  }

  height: 100vh;
  width: 100%;
`;

export { AppWrapper };
