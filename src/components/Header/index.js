import React, { useState } from "react";
import styled from "styled-components";

export default function Header() {
  const [showSearchContent, setShowSearchContent] = useState(false);

  const showSearchContentContainer = (b = false) => {
    setShowSearchContent(b);
  };

  return (
    <Wrapper>
      <Container>
        <SearchBar>
          <div>
            <input
              className="Text-Style-7"
              placeholder="소환사명,챔피언…"
              onFocus={() => {
                console.log("@@@@ focus");
                showSearchContentContainer(true)

                // if (!showSearchContent) {
                //   document.addEventListener('click', showSearchContentContainer)
                // }
              }}
              onBlur={() => {
                showSearchContentContainer(false)
              }}
            />
          </div>
          <div>
            <button>
              <img src="/images/icon-gg.svg" />
            </button>
          </div>
          <SearchContentContainer isShow={showSearchContent}>
            <SearchContent>
              <SearchContentHeader></SearchContentHeader>
              <SearchContetnBody>
                <SearchContentCard>
                  <a>
                    <div>
                      <img src="https://opgg-static.akamaized.net/images/profile_icons/profileIcon5091.jpg?image=q_auto&image=q_auto,f_webp,w_72&v=1648102888115" />
                    </div>
                    <div>
                      <div>bsp</div>
                      <div>silver 1</div>
                    </div>
                  </a>
                </SearchContentCard>
                <SearchContentCard>
                  <a>
                    <div>
                      <img src="https://opgg-static.akamaized.net/images/profile_icons/profileIcon5091.jpg?image=q_auto&image=q_auto,f_webp,w_72&v=1648102888115" />
                    </div>
                    <div>
                      <div>bsp</div>
                      <div>silver 1</div>
                    </div>
                  </a>
                </SearchContentCard>
                <SearchContentCard>
                  <a>
                    <div>
                      <img src="https://opgg-static.akamaized.net/images/profile_icons/profileIcon5091.jpg?image=q_auto&image=q_auto,f_webp,w_72&v=1648102888115" />
                    </div>
                    <div>
                      <div>bsp</div>
                      <div>silver 1</div>
                    </div>
                  </a>
                </SearchContentCard>
                <SearchContentCard>
                  <a>
                    <div>
                      <img src="https://opgg-static.akamaized.net/images/profile_icons/profileIcon5091.jpg?image=q_auto&image=q_auto,f_webp,w_72&v=1648102888115" />
                    </div>
                    <div>
                      <div>bsp</div>
                      <div>silver 1</div>
                    </div>
                  </a>
                </SearchContentCard>
              </SearchContetnBody>
            </SearchContent>
          </SearchContentContainer>
        </SearchBar>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  min-width: 1000px;
  height: 97px;
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

const SearchContentContainer = styled.div`
  position: relative;
  display: ${props => (props.isShow ? 'auto' : 'none')};
`;
const SearchContent = styled.div`
  position: absolute;
  top: 36px;
  right: 0px;
  width: 260px;
  background-color: rgb(255, 255, 255);
  box-shadow: rgb(0 0 0 / 50%) 0px 2px 4px 0px;
`;

const SearchContentHeader = styled.div``;
const SearchContetnBody = styled.ul`
  margin-top: 4px;
  margin-bottom: 4px;
`;
const SearchContentCard = styled.li`
  list-style: none;
  cursor: pointer;

  &:hover {
    background: rgb(232, 245, 254);
  }

  & > a {
    display: flex;
    align-items: center;
    padding: 6px 16px;
    height: 53px;
    box-sizing: border-box;
    & > div {
      &:nth-of-type(1) {
        width: 36px;
        height: 36px;
        border-radius: 45px;
        overflow: hidden;
        & > img {
          width: 100%;
        }
      }
      &:nth-of-type(2) {
        padding-left: 14px;
        & > div {
          &:nth-of-type(1) {
            font-size: 14px;
            line-height: 1.43;
            color: rgb(68, 81, 92);
            font-family: Helvetica;
          }
          &:nth-of-type(2) {
            margin-top: 2px;
            line-height: 14px;
            font-size: 12px;
            color: rgb(102, 102, 102);
            font-family: Helvetica;
          }
        }
      }
    }
  }
`;
