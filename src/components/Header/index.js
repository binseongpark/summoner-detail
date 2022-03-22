import React from "react";
import styled from "styled-components";

export default function Header() {
  return <Wrapper>this is header</Wrapper>;
}

const Wrapper = styled.div`
  width: 100%;
  height: 97px;
  background-color: ${(props) => props.theme.color.azure};
`;
