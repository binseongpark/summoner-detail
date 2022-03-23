import styled from "styled-components";

export default function Match() {
  return (
    <Wrapper>
      <InfoContainer>
        <div>솔랭</div>
        <div>
          <span>하루전</span>
        </div>
        <div>패배</div>
        <div>15분 53초</div>
      </InfoContainer>
      <ChampionContainer>
        <div>
          <Icon>
            <img src="https://opgg-static.akamaized.net/images/lol/champion/Vex.png?image=q_auto,f_webp,w_auto&v=1648022284663" />
          </Icon>
          <Spells>
            <div>
              <img src="https://opgg-static.akamaized.net/images/lol/spell/SummonerFlash.png?image=q_auto,f_webp,w_auto&v=1648022284663" />
            </div>
            <div>
              <img src="https://opgg-static.akamaized.net/images/lol/spell/SummonerFlash.png?image=q_auto,f_webp,w_auto&v=1648022284663" />
            </div>
          </Spells>
          <Runes>
            <div>
              <img src="https://opgg-static.akamaized.net/images/lol/spell/SummonerFlash.png?image=q_auto,f_webp,w_auto&v=1648022284663" />
            </div>
            <div>
              <img src="https://opgg-static.akamaized.net/images/lol/spell/SummonerFlash.png?image=q_auto,f_webp,w_auto&v=1648022284663" />
            </div>
          </Runes>
        </div>
        <div>레오나</div>
      </ChampionContainer>
      <KdaContainer>
        <div>
          <span> 2 </span>
          <span>&nbsp;/&nbsp;</span>
          <span> 2 </span>
          <span>&nbsp;/&nbsp;</span>
          <span> 1</span>
        </div>
        <div>
          <span>
            1.50:1<span> 평점</span>
          </span>
        </div>
        <div>123</div>
      </KdaContainer>
      <StatsContainer>
        <div>레벨8</div>
        <div>20 (1.3) CS</div>
        <div>킬관여 38%</div>
      </StatsContainer>
      <ItemsContainer>
        <div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div>
          <img src="images/icon-ward-red.svg" />
          <span>제어 와드 1</span>
        </div>
      </ItemsContainer>
      <ParticipantsContainer>
        <div>
          <Participant>
            <div>
              <img />
            </div>
            <div>조선빵셔틀루피</div>
          </Participant>
          <Participant>
            <div>
              <img />
            </div>
            <div>조선빵셔틀루피</div>
          </Participant>
          <Participant>
            <div>
              <img />
            </div>
            <div>조선빵셔틀루피</div>
          </Participant>
          <Participant>
            <div>
              <img />
            </div>
            <div>조선빵셔틀루피</div>
          </Participant>
          <Participant>
            <div>
              <img />
            </div>
            <div>조선빵셔틀루피</div>
          </Participant>
        </div>
        <div>
          <Participant>
            <div>
              <img />
            </div>
            <div>조선빵셔틀루피</div>
          </Participant>
          <Participant>
            <div>
              <img />
            </div>
            <div>조선빵셔틀루피</div>
          </Participant>
          <Participant>
            <div>
              <img />
            </div>
            <div>조선빵셔틀루피</div>
          </Participant>
          <Participant>
            <div>
              <img />
            </div>
            <div>조선빵셔틀루피</div>
          </Participant>
          <Participant>
            <div>
              <img />
            </div>
            <div>조선빵셔틀루피</div>
          </Participant>
        </div>
      </ParticipantsContainer>
      <ActionContainer>
        <div>
          <img src="images/icon-viewdetail-red.png" />
        </div>
      </ActionContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 690px;
  height: 96px;
  border: solid 1px var(--pinkish-grey-two);
  background-color: var(--pinkish-grey);
  display: flex;

  &:not(:nth-of-type(1)) {
    margin-top: 8px;
  }
`;

const InfoContainer = styled.div`
  width: 70px;
  min-width: 70px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  & > div {
    font-family: AppleSDGothicNeo;
    font-size: 11px;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.42px;
    text-align: center;

    &:nth-of-type(1) {
      font-weight: bold;
      color: var(--greyish-brown);
    }
    &:nth-of-type(2) {
      color: var(--greyish-brown);
      padding-top: 4px;
      padding-bottom: 3px;
      margin-bottom: 5px;
      & > span {
        padding-bottom: 3px;
        border-bottom: 1px solid var(--pinkish-grey-three);
      }
    }
    &:nth-of-type(3) {
      color: var(--scarlet);
      font-weight: bold;
    }
    &:nth-of-type(4) {
      padding-top: 4px;
      color: var(--greyish-brown);
    }
  }
`;
const ChampionContainer = styled.div`
  width: 100px;
  min-width: 100px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  & > div {
    &:nth-of-type(1) {
      display: flex;
    }
    &:nth-of-type(2) {
      padding-top: 9px;
      text-align: center;
      font-family: AppleSDGothicNeo;
      font-size: 11px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: -0.42px;
      color: var(--greyish-brown);
    }
  }
`;
const Icon = styled.div`
  width: 46px;
  height: 46px;
  border-radius: 45px;
  overflow: hidden;
  & > img {
    width: 100%;
  }
`;
const Spells = styled.div`
  padding-left: 6px;
  padding-right: 4px;
  & > div {
    width: 22px;
    height: 22px;
    border-radius: 2px;
    overflow: hidden;
    & > img {
      width: 100%;
    }

    &:nth-of-type(1) {
      margin-bottom: 2px;
    }
  }
`;
const Runes = styled.div`
  & > div {
    width: 22px;
    height: 22px;
    border-radius: 45px;
    overflow: hidden;
    & > img {
      width: 100%;
    }

    &:nth-of-type(1) {
      margin-bottom: 2px;
    }
  }
`;
const KdaContainer = styled.div`
  /* width: calc(100% - 70px - 100px - 90px - 170px - 30px); */
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  & > div {
    &:nth-of-type(1) {
      & > span {
        font-family: Helvetica;
        font-size: 15px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.58px;
        color: var(--gunmetal);

        &:nth-of-type(1) {
        }
        &:nth-of-type(2) {
          font-weight: normal;
          color: var(--warm-grey-three);
        }
        &:nth-of-type(3) {
          color: var(--scarlet);
        }
        &:nth-of-type(4) {
          color: var(--warm-grey-three);
        }
      }
    }
    &:nth-of-type(2) {
      padding-top: 6px;
      padding-bottom: 7px;
      & > span {
        font-family: Helvetica;
        font-size: 11px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.42px;
        color: var(--black);
        & > span {
          font-family: AppleSDGothicNeo;
          color: var(--gunmetal);
        }
      }
    }
    &:nth-of-type(3) {
    }
  }
`;
const StatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90px;
  min-width: 90px;
  font-family: AppleSDGothicNeo;
  font-size: 11px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.42px;
  text-align: center;

  & > div {
    &:nth-of-type(1) {
      color: var(--gunmetal);
    }
    &:nth-of-type(2) {
      color: var(--gunmetal);
      padding: 6px 0px;
    }
    &:nth-of-type(3) {
      color: var(--scarlet);
    }
  }
`;
const ItemsContainer = styled.div`
  width: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  & > div {
    &:nth-of-type(1) {
      display: flex;
      justify-content: center;
      & > div {
        background-color: lime;
        width: 22px;
        height: 22px;
        border-radius: 2px;

        &:not(:nth-of-type(1)) {
          margin-left: 2px;
        }
      }
    }
    &:nth-of-type(2) {
      display: flex;
      margin-top: 2px;
      justify-content: center;
      & > div {
        background-color: red;
        width: 22px;
        height: 22px;
        border-radius: 2px;
        &:not(:nth-of-type(1)) {
          margin-left: 2px;
        }
        &:nth-last-of-type(1) {
          border-radius: 45px;
        }
      }
    }
    &:nth-of-type(3) {
      display: flex;
      align-items: center;
      width: 100%;
      justify-content: center;
      padding-top: 7px;
      & > img {
        width: 16px;
      }

      & > span {
        padding-left: 4px;
        font-family: AppleSDGothicNeo;
        font-size: 11px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.42px;
        color: var(--black-two);
      }
    }
  }
`;
const ParticipantsContainer = styled.div`
  width: 170px;
  min-width: 170px;
  display: flex;
  align-items: center;

  & > div {
    width: 100%;
  }
`;
const ActionContainer = styled.div`
  width: 30px;
  min-width: 30px;
  border: solid 1px var(--brownish-pink);
  background-color: var(--pinkish-tan);
  & > div {
    width: 30px;
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding-bottom: 12px;
    box-sizing: border-box;
  }
`;

const Participant = styled.div`
  display: flex;
  align-items: center;

  &:not(:nth-of-type(1)) {
    margin-top: 2px;
  }

  & > div {
    &:nth-of-type(1) {
      width: 16px;
      height: 16px;
      background-color: black;
      border: solid 1px #0d0819;
      box-sizing: border-box;

      & > img {
        width: 100%;
      }
    }
    &:nth-of-type(2) {
      padding-left: 3px;
      width: 55px;
      white-space: pre;
      overflow: hidden;
      text-overflow: ellipsis;
      font-family: AppleSDGothicNeo;
      font-size: 11px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: -0.42px;
      color: var(--black-two);
    }
  }
`;
