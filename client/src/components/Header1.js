import styled from "styled-components";
import { Link } from "react-router-dom";

const GoodsList = styled.button`
  display: inline-flex;
  outline: none;
  border: none;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;

  /* 크기 */
  height: 2.25rem;
  font-size: 1rem;

  /* 색상 */
  background: white;
  &:hover {
    color: #ffcf00;
  }
  &:active {
    font: #1c7ed6;
  }

  /* 기타 */
  & + & {
    margin-left: 1rem;
  }
`;

const Headerpart = styled.header`
  margin: 20px;
  background: white;
  display: flex;
  justify-content: right;
  height: auto;
`;

export default function Header() {
  return (
    <div>
      <Headerpart>
        <Link to="/goods/goods">
          <GoodsList>goodslist</GoodsList>
        </Link>
        <Link to="/login">
          <GoodsList>Login</GoodsList>
        </Link>
        <Link to="/signup">
          <GoodsList>Sign Up</GoodsList>
        </Link>
        <Link to="/goods/upload">
          <GoodsList>상품등록</GoodsList>
        </Link>
      </Headerpart>
    </div>
  );
}