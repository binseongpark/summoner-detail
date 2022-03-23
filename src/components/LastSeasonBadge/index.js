import styled from "styled-components";

export default function LastSeasonBadge() {
  return <Wrapper>
    <span className="Text-Style-6">S3<span className="Text-Style-5"> Bronze</span></span>
  </Wrapper>;
}

const Wrapper = styled.div`
  display: inline-block;
  width: 58px;
  height: 20px;
  border-radius: 2px;
  border: solid 1px var(--silver-two);
  background-color: var(--silver);
  display: flex;
  align-items: center;
  justify-content: center;

  &:not(:nth-of-type(1)) {
    margin-left: 7px;
  }
`;
