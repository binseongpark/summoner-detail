import styled from "styled-components";

export default function Summary() {
  return (
    <Wrapper>
      <Header></Header>
      <Body>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </Body>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 690px;
  height: 194px;
  border-radius: 2px;
  border: solid 1px var(--silver-three);
  background-color: var(--white-five);
  margin-bottom: 16px;
`;

const Header = styled.div`
  height: 36px;
  background-color: var(--white-four);
  border-bottom: solid 1px var(--silver-three);
`;
const Body = styled.div`
  display: flex;
  height: calc(100% - 36px);
  & > div {
    &:nth-of-type(1) {
      width: 276px;
      height: 100%;
    }
    &:nth-of-type(2) {
      width: calc(100% - 276px - 184px);
      border-left: solid 1px var(--silver-three);
      height: 100%;
    }
    &:nth-of-type(3) {
      width: 184px;
      height: 100%;
      border-left: solid 1px var(--silver-three);
    }
  }
`;
