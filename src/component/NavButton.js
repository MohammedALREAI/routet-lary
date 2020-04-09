import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const SpanButton = styled.span`
  background-color: white;
  padding: 10;
  color: black;
  border-radius: 1;
  border: 2px solid black;
`;

const Button = props => {
  return (
    <Link to={props.link}>
      <SpanButton>{props.name}</SpanButton>
    </Link>
  );
};

export default Button;
