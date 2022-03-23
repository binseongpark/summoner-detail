import styled from "styled-components";

export default function Summary() {
  return (
    <Wrapper>
      <Header></Header>
      <Body>
        <div>1</div>
        <MostChampionContainer>
          <MostChampion></MostChampion>
        </MostChampionContainer>
        <div>
          <div className="title">선호 포지션 (랭크)</div>
          <LineWinRate>
            <div>
              <img src="images/icon-mostposition-jng.svg" />
            </div>
            <div>
              <div>탑</div>
              <div>
                <span>
                  70<span>%</span>
                </span>
                <span>
                  Win Rate <span>53%</span>
                </span>
              </div>
            </div>
          </LineWinRate>
          <LineWinRate>
            <div>
              <img src="images/icon-mostposition-jng.svg" />
            </div>
            <div>
              <div>탑</div>
              <div>
                <span>
                  70<span>%</span>
                </span>
                <span>
                  Win Rate <span>53%</span>
                </span>
              </div>
            </div>
          </LineWinRate>
        </div>
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
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: baseline;
      padding-left: 16px;
      box-sizing: border-box;
      & .title {
        font-family: NanumBarunGothicOTF;
        font-size: 12px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        color: var(--brownish-grey-two);
        padding-bottom: 20px;
      }
    }
  }
`;

const MostChampionContainer = styled.div`
  padding-left: 16px;
  display: flex;
`;
const MostChampion = styled.div``;

const LineWinRate = styled.div`
  display: flex;

  &:nth-last-of-type(1) {
    margin-top: 22px;
  }

  & > div {
    &:nth-of-type(1) {
      width: 28px;
      & > img {
        width: 100%;
      }
    }
    &:nth-of-type(2) {
      padding-left: 8px;

      & > div {
        &:nth-of-type(1) {
          font-family: NanumBarunGothicOTF;
          font-size: 14px;
          font-weight: normal;
          font-stretch: normal;
          font-style: normal;
          line-height: normal;
          letter-spacing: normal;
          color: var(--black);
        }
        &:nth-of-type(2) {
          & > span {
            &:nth-of-type(1) {
              width: 23px;
              height: 13px;
              font-family: Helvetica;
              font-size: 11px;
              font-weight: bold;
              font-stretch: normal;
              font-style: normal;
              line-height: normal;
              letter-spacing: normal;
              color: var(--bluish);
              & > span {
                font-weight: normal;
              }
            }
            &:nth-of-type(2) {
              font-family: Helvetica;
              font-size: 11px;
              font-weight: normal;
              font-stretch: normal;
              font-style: normal;
              line-height: normal;
              letter-spacing: normal;
              color: var(--brownish-grey-two);

              &::before {
                display: inline-block;
                margin-left: 6px;
                margin-right: 6px;
                content: "";
                border-left: 1px solid rgb(205, 210, 210);
                height: 12px;
                vertical-align: middle;
              }
            }
          }
        }
      }
    }
  }
`;
