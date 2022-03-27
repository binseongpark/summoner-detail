import styled, { css } from "styled-components";

export default function Badge({ children, status }) {
  const getKillString = (s) => {
    switch (s) {
      case "Double Kill":
        return "더블킬";
      case "ACE":
        return "ACE";
      default:
        return s;
    }
  };

  return (
    <Wrapper status={status}>
      <div>{getKillString(children)}</div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: inline-block;
  height: 18px;
  padding-left: 5px;
  padding-right: 5px;
  font-family: AppleSDGothicNeo;
  font-size: 10px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.38px;
  color: var(--white-two);
  border-radius: 9px;

  &:not(:nth-of-type(1)) {
    margin-left: 4px;
  }

  ${(props) => {
    switch (props.status) {
      case "Double Kill":
      case "triple":
      case "penta":
        return css`
          background: rgb(238, 90, 82);
          border: 1px solid rgb(198, 68, 62);
        `;

      case "mvp":
        return css`
          background-color: rgb(225, 146, 5);
          border: 1px solid rgb(184, 138, 42);
        `;
      case "ACE":
        return css`
          border: solid 1px var(--warm-purple);
          background-color: var(--amethyst);
          font-family: Helvetica;
          font-size: 10px;
          font-weight: normal;
          font-stretch: normal;
          font-style: normal;
          line-height: normal;
          letter-spacing: normal;
        `;
    }
  }}

  & > div {
    display: flex;
    align-items: center;
    height: 100%;
  }
`;
