import styled, { css } from "styled-components";

export default function Badge({ children, status }) {
  return (
    <Wrapper status={status}>
      <div>{children}</div>
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

  ${(props) => {
    switch (props.status) {
      case "double":
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
      case "ace":
        return css`
          border: solid 1px var(--warm-purple);
          background-color: var(--amethyst);
        `;
    }
  }}

  & > div {
    display: flex;
    align-items: center;
    height: 100%;
  }
`;
