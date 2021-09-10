import styled from "styled-components";
import "../App.css"
import { AccountBox } from "../components/accountBox";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // background-color: #ffd8cb;
    min-height: 100vh;
    // background-color: rgb(255,220,214);
    // background-image: linear-gradient(307deg, rgba(255,220,214,1) 0%, rgba(255,239,226,1) 44%); ;  

`;

function App() {
  return (
    <AppContainer>
      <AccountBox />
    </AppContainer>
  );
}

export default App;
