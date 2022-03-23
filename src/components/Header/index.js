import React from "react";
import styled from "styled-components";

export default function Header() {
  return (
    <Wrapper>
      <Container>
        <SearchBar>
          <div>
            <input className="Text-Style-7" placeholder="소환사명,챔피언…" />
          </div>
          <div>
            <button>
              <img src="/images/icon-gg.svg" />
            </button>
          </div>
        </SearchBar>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  min-width: 1000px;
  height: 97px;
  /* background-color: ${(props) => props.theme.color.azure}; */
  background-color: var(--azure);
`;

const Container = styled.div`
  width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
`;

const SearchBar = styled.div`
  margin-top: 53px;
  width: 260px;
  height: 32px;
  border-radius: 2px;
  background-color: var(--white-two);
  display: flex;

  & > div {
    &:nth-of-type(1) {
      width: 100%;

      & > input {
        width: 100%;
        outline: none;
        border: none;
        height: 32px;
        box-sizing: border-box;
        padding-left: 14px;
        padding-right: 14px;
      }
    }
    &:nth-of-type(2) {
      width: 54px;

      & > button {
        display: flex;
        width: 100%;
        height: 100%;
        height: 32px;
        outline: none;
        border: none;
        background-color: var(--white-two);
        justify-content: center;
        align-items: center;
        cursor: pointer;

        & > img {
          width: 100%;
        }
      }
    }
  }
`;
