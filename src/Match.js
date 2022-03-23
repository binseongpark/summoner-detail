import styled from "styled-components";

export default function Match() {
  return <Wrapper>this is match</Wrapper>;
}

const Wrapper = styled.div`
  width: 690px;
  height: 96px;
  border: solid 1px var(--pinkish-grey-two);
  background-color: var(--pinkish-grey);

  &:not(:nth-of-type(1)) {
    margin-top: 8px;
  }
`;
