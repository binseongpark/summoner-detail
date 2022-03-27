import styled from "styled-components";
import { useSelector } from "react-redux";

export default function Profile() {
  const { appState } = useSelector((state) => {
    return {
      appState: state.app,
    };
  });
  return (
    <Wrapper>
      <div>
        <div className="profile-border-image">
          <img src={appState.info.summoner.profileBorderImageUrl} />
        </div>
        <div className="profile-image">
          <img width={"100%"} src={appState.info.summoner.profileImageUrl} />
        </div>
        <div>
          <span className="Text-Style-8">21</span>
        </div>
      </div>
      <div>
        <p className="Text-Style-3">{appState.info.summoner.name}</p>
        <p>
          <span className="Text-Style-4">
            레더 랭킹&nbsp;
            <span className="Text-Style-5">
              {appState.info.summoner.ladderRank &&
                appState.info.summoner.ladderRank.rank}
            </span>
            <span className="Text-Style-6">{`위 (상위${
              appState.info.summoner.ladderRank &&
              appState.info.summoner.ladderRank.rankPercentOfTop
            }%)`}</span>
          </span>
        </p>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  padding-top: 6px;
  & > div {
    &:nth-of-type(1) {
      width: 120px;
      height: 120px;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;

      & > div {
        position: absolute;
        width: 100%;
        display: flex;
        justify-content: center;

        &:nth-of-type(1) {
          z-index: 3;
        }
        &:nth-of-type(2) {
          z-index: 2;
          width: 100px;
        }
        &:nth-of-type(3) {
          z-index: 10;
          bottom: -1px;
          height: 24px;

          & > span {
            background-image: url("images/bg-levelbox.png");
            background-repeat: no-repeat;
            background-position: center;
            width: 44px;
            height: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
            padding-left: 1px;
          }
        }
      }
    }
    &:nth-of-type(2) {
      padding-top: 11px;
      padding-left: 17px;

      & > p {
        &:nth-of-type(1) {
          padding-bottom: 4px;
        }
      }
    }
  }
`;

// 즐겨찾기도 만들자
