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
      <ProfileContainer>
        <div>
          <LastSeasonBadge/>
          <LastSeasonBadge/>
          <LastSeasonBadge/>
          <LastSeasonBadge/>
        </div>
        <div>
          <Profile />
        </div>
      </ProfileContainer>
    </div>
  );
}

const ProfileContainer = styled.div`
  width: 1000px;
  margin: 0 auto;
  padding-top: 15px;

  & > div {
    &:nth-of-type(1) {
      display: flex;
    }
  }
`

export default App;
