import React from "react";
import styled from "styled-components";

export default function Header() {
  return <Wrapper>this is header</Wrapper>;
}

const Wrapper = styled.div`
  width: 100%;
  min-width: 1000px;
  height: 97px;
  /* background-color: ${(props) => props.theme.color.azure}; */
  background-color: var(--azure);
`;
