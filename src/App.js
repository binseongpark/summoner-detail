import "./App.css";
import styled from "styled-components";
import Header from "components/Header";
import LastSeasonBadge from "components/LastSeasonBadge";

import Profile from "Profile";
import Summary from "Summary";
import Match from "Match";

function App() {
  return (
    <div className="App">
      <Header />
      <ProfileWrapper>
        <ProfileContainer>
          <div>
            <LastSeasonBadge />
            <LastSeasonBadge />
            <LastSeasonBadge />
            <LastSeasonBadge />
          </div>
          <div>
            <Profile />
          </div>
        </ProfileContainer>
      </ProfileWrapper>
      <ContentWrapper>
        <ContentContainer>
          {/* left side */}
          <LeftSide>
            <SoloTier></SoloTier>
            <FreeTier></FreeTier>
            <WinRate>
              <WinRateHeader>
                <div className="active">챔피언 승률</div>
                <div className="non-active">7일간 랭크 승률</div>
              </WinRateHeader>
              <WinRateBody>
                <WinRateChampion>
                  <div>
                    <img />
                  </div>
                  <div>
                    <p className="top-text">신지드</p>
                    <p className="bottom-text">CS 67.8 (2.4)</p>
                  </div>
                  <div>
                    <p className="top-text">2.47:1 평점</p>
                    <p className="bottom-text">4.3 / 6.1 / 10.7</p>
                  </div>
                  <div>
                    <p className="top-text">69%</p>
                    <p className="bottom-text">35게임</p>
                  </div>
                </WinRateChampion>
                <WinRateChampion>
                  <div>
                    <img />
                  </div>
                  <div>
                    <p className="top-text">신지드</p>
                    <p className="bottom-text">CS 67.8 (2.4)</p>
                  </div>
                  <div>
                    <p className="top-text">2.47:1 평점</p>
                    <p className="bottom-text">4.3 / 6.1 / 10.7</p>
                  </div>
                  <div>
                    <p className="top-text">69%</p>
                    <p className="bottom-text">35게임</p>
                  </div>
                </WinRateChampion>
                <WinRateChampion>
                  <div>
                    <img />
                  </div>
                  <div>
                    <p className="top-text">신지드</p>
                    <p className="bottom-text">CS 67.8 (2.4)</p>
                  </div>
                  <div>
                    <p className="top-text">2.47:1 평점</p>
                    <p className="bottom-text">4.3 / 6.1 / 10.7</p>
                  </div>
                  <div>
                    <p className="top-text">69%</p>
                    <p className="bottom-text">35게임</p>
                  </div>
                </WinRateChampion>
                <WinRateChampion>
                  <div>
                    <img />
                  </div>
                  <div>
                    <p className="top-text">신지드</p>
                    <p className="bottom-text">CS 67.8 (2.4)</p>
                  </div>
                  <div>
                    <p className="top-text">2.47:1 평점</p>
                    <p className="bottom-text">4.3 / 6.1 / 10.7</p>
                  </div>
                  <div>
                    <p className="top-text">69%</p>
                    <p className="bottom-text">35게임</p>
                  </div>
                </WinRateChampion>
              </WinRateBody>
            </WinRate>
          </LeftSide>
          {/* right side */}
          <RightSide>
            <Summary />
            <Match />
            <Match />
            <Match />
          </RightSide>
        </ContentContainer>
      </ContentWrapper>
    </div>
  );
}

const ProfileWrapper = styled.div`
  border-bottom: 1px solid var(--white-three);
`;
const ProfileContainer = styled.div`
  width: 1000px;
  margin: 0 auto;
  padding-top: 15px;
  padding-bottom: 12px;

  & > div {
    &:nth-of-type(1) {
      display: flex;
    }
  }
`;

const ContentWrapper = styled.div``;
const ContentContainer = styled.div`
  display: flex;
  width: 1000px;
  margin: 0 auto;
  justify-content: space-between;
  padding-top: 10px;
`;
const LeftSide = styled.div`
  width: 300px;
`;
const RightSide = styled.div`
  width: 690px;
`;

const SoloTier = styled.div`
  width: 300px;
  height: 124px;
  border-radius: 2px;
  border: solid 1px var(--silver-three);
  background-color: var(--white-four);
`;
const FreeTier = styled.div`
  width: 300px;
  height: 98px;
  border-radius: 2px;
  border: solid 1px var(--silver-three);
  background-color: var(--white-four);
  margin-top: 8px;
`;

const WinRate = styled.div`
  border-radius: 2px;
  border: solid 1px var(--silver-three);
  border-bottom: none;
  margin-top: 8px;
`;
const WinRateHeader = styled.div`
  height: 44px;
  display: flex;

  & > div {
    width: 100%;
    background-color: var(--white-four);

    &.active {
      border-right: solid 1px var(--silver-three);
      background-color: initial;
    }
    &.non-active {
      border-bottom: solid 1px var(--silver-three);
    }
  }
`;
const WinRateBody = styled.div``;
const WinRateChampion = styled.div`
  padding-left: 15px;
  padding-top: 4px;
  padding-bottom: 4px;
  border-bottom: 1px solid var(--silver-three);
  display: flex;

  & .top-text {
    font-family: AppleSDGothicNeo;
    font-size: 13px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: var(--brownish-grey);
  }

  & .bottom-text {
    font-family: Helvetica;
    font-size: 11px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: var(--cool-grey);
    padding-top: 3px;
  }
  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    &:nth-of-type(1) {
      width: 45px;
      height: 45px;
      min-width: 45px;
      background-color: lime;
      border-radius: 45px;
    }
    &:nth-of-type(2) {
      width: 85px;
      min-width: 85px;
      padding-left: 10px;
      & > p {
        &:nth-of-type(1) {
        }
        &:nth-of-type(2) {
        }
      }
    }
    &:nth-of-type(3) {
      width: 100%;
      & > p {
        text-align: center;
      }
    }
    &:nth-of-type(4) {
      width: 70px;
      min-width: 70px;
      & > p {
        text-align: center;
      }
    }
  }
`;
const WinRateWeek = styled.div``;

export default App;
