import "./App.css";
import styled from "styled-components";
import Header from "components/Header";
import LastSeasonBadge from "components/LastSeasonBadge";

import Profile from "Profile";
import SearchBar from "SearchBar";

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
          <LeftSide>1</LeftSide>
          <RightSide>2</RightSide>
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

const ContentWrapper = styled.div`
`;
const ContentContainer = styled.div`
  display: flex;
  width: 1000px;
  margin: 0 auto;
  justify-content: space-between;
  padding-top: 10px;
`;
const LeftSide = styled.div`
  background-color: red;
  width: 300px;
`;
const RightSide = styled.div`
  background-color: blue;
  width: 690px;
`;

export default App;
