import styled from "styled-components";

export default function Profile() {
  return (
    <Wrapper>
      <div></div>
      <div>
        <p className="Text-Style-3">플레이어아이디</p>
        <p>
          <span class="Text-Style-4">
            레더 랭킹&nbsp;
            <span class="Text-Style-5">363,499</span>
            <span class="Text-Style-6">{'위 (상위40.7%)'}</span>
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
      background-color: lime;
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
