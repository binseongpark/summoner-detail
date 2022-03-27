import "./App.css";
import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import Header from "components/Header";
import LastSeasonBadge from "components/LastSeasonBadge";

import Profile from "Profile";
import Summary from "Summary";
import Match from "Match";

import { useSelector, useDispatch } from "react-redux";
import * as actions from "actions";
import classNames from "classnames";

function App() {
  const dispatch = useDispatch();

  const { appState } = useSelector((state) => {
    return {
      appState: state.app,
    };
  });
  const { mostInfo } = appState;

  useEffect(() => {
    dispatch({
      type: actions.INIT,
      data: {},
    });

    dispatch({
      type: actions.GET_SUMMONER_REQUEST,
      data: {
        summonerName: "bsp",
      },
    });
  }, []);

  const setMostSelectedIndex = (i) => {
    dispatch({
      type: actions.DEFAULT_ASSIGN,
      data: {
        mostSelectedIndex: i,
      },
    });
  };

  return (
    <div className="App">
      <Header />
      <ProfileWrapper>
        <ProfileContainer>
          <div>
            {Array.isArray(appState.info.summoner.previousTiers) &&
              appState.info.summoner.previousTiers.map((item, index) => {
                return <LastSeasonBadge key={index} tier={item} />;
              })}
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
              <WinRateHeader mostSelectedIndex={appState.mostSelectedIndex}>
                <div
                  className={classNames(
                    { active: appState.mostSelectedIndex === 0 },
                    { "non-active": appState.mostSelectedIndex === 1 }
                  )}
                  onClick={() => {
                    setMostSelectedIndex(0);
                  }}
                >
                  챔피언 승률
                </div>
                <div
                  className={classNames(
                    { active: appState.mostSelectedIndex === 1 },
                    { "non-active": appState.mostSelectedIndex === 0 }
                  )}
                  onClick={() => {
                    setMostSelectedIndex(1);
                  }}
                >
                  7일간 랭크 승률
                </div>
              </WinRateHeader>
              <WinRateBody>
                {appState.mostSelectedIndex === 0 &&
                  mostInfo.champions.map((item, index) => {
                    return (
                      <WinRateChampion key={index}>
                        <div>
                          <img src={item.imageUrl} />
                        </div>
                        <div>
                          <p className="top-text">{item.name}</p>
                          <p className="bottom-text">CS {item.cs} (2.4)</p>
                        </div>
                        <div>
                          <p className="top-text">2.47:1 평점</p>
                          <p className="bottom-text">
                            {item.kills} / {item.deaths} / {item.assists}
                          </p>
                        </div>
                        <div>
                          <p className="top-text">
                            {Math.ceil((item.wins / item.games) * 100)}%
                          </p>
                          <p className="bottom-text">{item.games}게임</p>
                        </div>
                      </WinRateChampion>
                    );
                  })}
                {appState.mostSelectedIndex === 1 &&
                  mostInfo.recentWinRate.map((item, index) => {
                    return (
                      <WinRateWeek key={index}>
                        <div>
                          <div>
                            <img src={item.imageUrl} />
                          </div>
                          <span>{item.name}</span>
                        </div>
                        <div>
                          {/* rechart */}
                          <div>{Math.ceil(item.wins / (item.wins + item.losses) * 100)}%</div>
                          <div>
                            <Graph></Graph>
                          </div>
                        </div>
                      </WinRateWeek>
                    );
                  })}
              </WinRateBody>
            </WinRate>
          </LeftSide>
          {/* right side */}
          <RightSide>
            <Summary />
            {appState.matches.games.map((item, index) => (
              <Match game={item} key={index} />
            ))}
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
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &.active {
      ${(props) => {
        if (props.mostSelectedIndex === 0) {
          return css`
            border-right: solid 1px var(--silver-three);
          `;
        } else {
          return css`
            border-left: solid 1px var(--silver-three);
          `;
        }
      }}

      background-color: initial;
      font-family: AppleSDGothicNeo;
      font-size: 12px;
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: normal;
      color: var(--brownish-grey);
    }
    &.non-active {
      border-bottom: solid 1px var(--silver-three);
      font-family: AppleSDGothicNeo;
      font-size: 12px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: normal;
      text-align: center;
      color: var(--cool-grey);
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
      overflow: hidden;
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
const WinRateWeek = styled.div`
  padding-left: 15px;
  padding-right: 8px;
  padding-top: 4px;
  padding-bottom: 4px;
  border-bottom: 1px solid var(--silver-three);
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > div {
    &:nth-of-type(1) {
      display: flex;
      align-items: center;
      & > div {
        width: 32px;
        height: 32px;
        border-radius: 45px;
        overflow: hidden;
        & > img {
          width: 32px;
        }
      }

      & > span {
        font-family: AppleSDGothicNeo;
        font-size: 13px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        color: var(--brownish-grey);
        padding-left: 10px;
      }
    }
    &:nth-of-type(2) {
      display: flex;
      align-items: center;

      & > div {
        &:nth-of-type(1) {
          font-family: Helvetica;
          font-size: 13px;
          font-weight: bold;
          font-stretch: normal;
          font-style: normal;
          line-height: normal;
          letter-spacing: normal;
          text-align: center;
          color: var(--cool-grey);
          padding-right: 12px;
        }
        &:nth-of-type(2) {
        }
      }
    }
  }
`;
const Graph = styled.div`
  width: 123px;
  height: 24px;
  background-color: red;
`;

export default App;
