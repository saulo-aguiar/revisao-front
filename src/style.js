import styled from "styled-components";
import sidebar from "./images/Sidebar.png";

export const Content = styled.main`
  background: #efefef;
  width: 100vw;
  height: 100vh;
  font-family: "Montserrat", sans-serif;
  display: flex;
`;

export const LeftContainer = styled.div`
  width: 613px;
  max-height: 100%;
  background-image: url(${sidebar});
  background-size: cover;
  color: #fff;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 92px 0 92px 96px;
`;

export const RightContainer = styled.div`
  width: calc(100% - 613px);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  div {
    display: flex;
  }
  .text {
    position: absolute;
    bottom: 50px;
    font-size: 16px;
  }
`;

export const Select = styled.select`
  width: 215px;
  height: 45px;
  border-radius: 5px;
  filter: drop-shadow(0px 3px 8px rgba(0, 0, 0, 0.031));
  padding: 15px;
  border: none;
`;

export const Ball = styled.div`
  font-size: 20px;
  background-color: #fff;
  border-radius: 50%;
  width: 111px;
  height: 111px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
`;

export const MegaSenaContainer = styled.div`
  display: flex;
  align-items: center;

  p {
    font-size: 30px;
    font-weight: bold;
    text-transform: uppercase;
    margin-left: 10px;
  }
  img {
    width: 59px;
    height: 55px;
  }
`;

export const TextBottom = styled.div`
  p {
    font-size: 14px;
    text-transform: uppercase;
  }

  h3 {
    font-size: 20px;
  }
`;
