import styled from "styled-components";

const colors = {
  facebook: "#3c5a99",
  twitter: "#1da1f2",
  linkedin: "#0077B5",
  slack: "#e2a52e"
};

export const SocialButtonsContainer = styled.fieldset`
  display: flex;
  justify-content: space-around;
  border: 0;
  margin: 0 auto 20px;
  width: 80%;
`;

export const SocialButton = styled.a<{
  account: "twitter" | "facebook" | "linkedin" | "slack";
}>`
  height: 40px;
  width: 40px;
  background-color: ${props => colors[props.account]};
  color: #fff;
  text-align: center;
  font-size: 20px;
  padding: 8px 0;
  box-sizing: border-box;
  border-radius: 50%;
`;
