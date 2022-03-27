import styled, { css } from "styled-components";
import React from "react";
import {
  PieChart,
  Pie,
  Legend,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Sector,
  Label,
  LabelList,
} from "recharts";
import { useSelector, useDispatch } from "react-redux";

const data01 = [
  { name: "Group A", value: 400, v: 89 },
  { name: "Group B", value: 300, v: 100 },
  // { name: "Group C", value: 200, v: 200 },
  // { name: "Group D", value: 200, v: 20 },
  // { name: "Group E", value: 278, v: 40 },
  // { name: "Group F", value: 189, v: 60 },
];
const colors = ["#1f8ecd", "#ee5a52"];

export default function Summary() {
  const { appState } = useSelector((state) => {
    return {
      appState: state.app,
    };
  });
  const { matches } = appState;
  const { champions, positions, summary } = matches

  return (
    <Wrapper>
      <Header>
        <ul>
          <HeaderMenu active>
            <div>전체</div>
          </HeaderMenu>
          <HeaderMenu>
            <div>솔로게임</div>
          </HeaderMenu>
          <HeaderMenu>
            <div>자유랭크</div>
          </HeaderMenu>
        </ul>
      </Header>
      <Body>
        <div>
          <ChartContainer>
            <div>
              <div>20전 11승 9패</div>
              <div
                style={{
                  width: "90px",
                  height: "90px",
                  position: "relative",
                  display: "inline-block",
                  verticalAlign: "middle",
                }}
              >
                {/* <ResponsiveContainer width="100%" height={"100%"} > */}
                <PieChart
                  width={90}
                  height={90}
                  margin={{ top: -10, left: -10, right: -10, bottom: -10 }}
                >
                  <Pie
                    data={data01}
                    dataKey="value"
                    innerRadius="50%"
                    isAnimationActive={false}
                    // outerRadius="40%"
                    // onMouseEnter={this.handleEnter}
                    // onMouseLeave={this.handleLeave}
                  >
                    {data01.map((entry, index) => (
                      <Cell
                        key={`slice-${index}`}
                        fill={colors[index % 10]}
                        // fillOpacity={
                        //   this.state.activeIndex === index ? 1 : 0.25
                        // }
                        fillOpacity={1}
                      />
                    ))}
                    <Label value="65%" position="center" />
                  </Pie>
                </PieChart>
                {/* </ResponsiveContainer> */}
              </div>
            </div>
            <div>
              <div>
                25.9 / <StyledSpan bold>15.8</StyledSpan> / 14.1
              </div>
              <div>
                <StyledSpan bold fontSize="16px" color="var(--bluey-green)">
                  3.45:1
                </StyledSpan>{" "}
                <StyledSpan fontSize="16px">(58%)</StyledSpan>
              </div>
            </div>
          </ChartContainer>
        </div>
        <MostChampionContainer>
          <MostChampion>
            <div>
              <img src="https://opgg-static.akamaized.net/images/lol/champion/Vex.png?image=q_auto,f_webp,w_auto&v=1648022284663" />
            </div>
            <div>
              <div>벡스</div>
              <div>
                <WinRateSpan>70%</WinRateSpan>
                <span> (7승 3패)</span>
                <span>13.01 평점</span>
              </div>
            </div>
          </MostChampion>
          <MostChampion>
            <div>
              <img src="https://opgg-static.akamaized.net/images/lol/champion/Vex.png?image=q_auto,f_webp,w_auto&v=1648022284663" />
            </div>
            <div>
              <div>벡스</div>
              <div>
                <WinRateSpan>70%</WinRateSpan>
                <span> (7승 3패)</span>
                <span>13.01 평점</span>
              </div>
            </div>
          </MostChampion>
          <MostChampion isEmpty>
            <div>
              <img src="images/empty-champion.svg" />
            </div>
            <div>챔피언 정보가 없습니다.</div>
          </MostChampion>
        </MostChampionContainer>
        <div>
          <div className="title">선호 포지션 (랭크)</div>
          {Array.isArray(positions) &&
            positions.map((item, index) => {
              return (
                <LineWinRate key={index}>
                  <div>
                    {
                      item.position === 'TOP' ?
                      <img src="images/icon-mostposition-top.svg" />
                      :
                      null
                    }
                    {
                      item.position === 'JNG' ?
                      <img src="images/icon-mostposition-jng.svg" />
                      :
                      null
                    }
                    {
                      item.position === 'MID' ?
                      <img src="images/icon-mostposition-mid.svg" />
                      :
                      null
                    }
                    {
                      item.position === 'ADC' ?
                      <img src="images/icon-mostposition-adc.svg" />
                      :
                      null
                    }
                    {
                      item.position === 'SUP' ?
                      <img src="images/icon-mostposition-sup.svg" />
                      :
                      null
                    }
                  </div>
                  <div>
                    <div>
                      {
                        (() => {
                          switch (item.positionName) {
                            case 'Top':
                              return '탑'
                            case 'Jungle':
                              return '정글'
                            case 'Middle':
                              return '미드'
                            case 'Bottom':
                              return '원딜'
                            case 'Support':
                              return '서폿'
                          }
                        })()
                      }
                    </div>
                    <div>
                      <span>
                        {Math.ceil(item.wins / 20 * 100)}<span>%</span>
                      </span>
                      <span>
                        Win Rate <span>{Math.ceil(item.wins / item.games * 100)}%</span>
                      </span>
                    </div>
                  </div>
                </LineWinRate>
              );
            })}
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

  & > ul {
    height: 100%;
    padding-left: 4px;
  }
`;

const HeaderMenu = styled.li`
  display: inline-block;
  height: 100%;
  margin: 0 12px;
  font-family: NanumBarunGothicOTF;
  font-size: 12px;
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: var(--greyish-brown);
  cursor: pointer;

  & > div {
    height: 100%;
    display: flex;
    align-items: center;
    justify-items: center;
    box-sizing: border-box;

    ${(props) => {
      if (props.active) {
        return css`
          color: var(--bluish);
          border-bottom: 2px solid var(--bluish);
        `;
      }
    }}
  }
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
  flex-direction: column;
  justify-content: center;
`;
const MostChampion = styled.div`
  display: flex;
  &:not(:nth-of-type(1)) {
    margin-top: 12px;
  }
  & > div {
    &:nth-of-type(1) {
      width: 34px;
      height: 34px;
      border-radius: 45px;
      overflow: hidden;

      & > img {
        width: 100%;
      }
    }
    &:nth-of-type(2) {
      padding-left: 8px;
      ${(props) => {
        if (props.isEmpty) {
          return css`
            font-family: NanumBarunGothicOTF;
            font-size: 11px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            letter-spacing: normal;
            color: var(--warm-grey-two);
            display: flex;
            align-items: center;
          `;
        } else {
          return css`
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
                font-family: Helvetica;
                font-size: 11px;
                font-weight: normal;
                font-stretch: normal;
                font-style: normal;
                line-height: normal;
                letter-spacing: normal;
                color: var(--greyish-brown);

                & > span {
                  &:nth-of-type(1) {
                  }
                  &:nth-of-type(2) {
                  }
                  &:nth-of-type(3) {
                    color: var(--yellow-ochre);

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
          `;
        }
      }}
    }
  }
`;

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

const WinRateSpan = styled.span`
  color: var(--reddish);
`;

const ChartContainer = styled.div`
  padding-left: 24px;
  box-sizing: border-box;
  display: flex;
  width: 100%;
  height: 100%;
  & > div {
    &:nth-of-type(1) {
      display: flex;
      flex-direction: column;
      justify-content: center;

      & > div {
        &:nth-of-type(1) {
          text-align: center;
          padding-bottom: 14px;
          font-family: Helvetica;
          font-size: 12px;
          font-weight: normal;
          font-stretch: normal;
          font-style: normal;
          line-height: normal;
          letter-spacing: normal;
          color: var(--brownish-grey-two);
        }
        &:nth-of-type(2) {
          /* width: 90px; */
        }
      }
    }
    &:nth-of-type(2) {
      padding-left: 35px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      font-family: Helvetica;
      font-size: 11px;
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: normal;
      text-align: center;
      color: var(--black);

      & > div {
        &:nth-of-type(2) {
          padding-top: 6px;
        }
      }
    }
  }
`;

const StyledSpan = styled.span`
  /* 크기 색 지정할수 있게 만들자 */
  font-family: Helvetica;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "11px")};
  font-weight: ${(props) => (props.bold ? "bold" : "normal")};
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: ${(props) => (props.color ? props.color : "var(--reddish)")};
`;
