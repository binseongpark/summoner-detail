import styled from "styled-components";

export default function LastSeasonBadge({ tier }) {
  return <Wrapper>
    <span className="Text-Style-5">{tier.shortString}<span className="Text-Style-6"> {tier.tier}</span></span>
  </Wrapper>;
}

const Wrapper = styled.div`
  display: inline-block;
  padding-left: 5px;
  padding-right: 5px;
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
