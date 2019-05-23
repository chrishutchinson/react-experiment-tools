import styled from "styled-components";

export const ProfileContainer = styled.div`
  background: #fafafa;
  border-radius: 5px;
  box-shadow: 2px 3px 4px #ddd;
  border: 1px solid #cacaca;
  padding: 30px;
  margin: auto;
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  font-family: "Roboto", sans-serif;
  box-sizing: border-box;

  img {
    border-radius: 50%;
    border: 1px solid #cacaca;
    width: 120px;
    height: 120px;
    margin: 0 auto 20px;
  }

  h1 {
    margin: 0 auto 5px;
    text-align: center;
  }

  p {
    text-align: center;
    margin: 0 auto 20px;
    color: #888;
  }

  button {
    display: flex;
    margin: 0 auto;
    padding: 10px 15px;
    background: #386eb2;
    border: 0;
    color: #fff;
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    border-radius: 5px;

    svg {
      margin-left: 10px;
    }

    &:disabled {
      opacity: 0.6;
    }
  }
`;
