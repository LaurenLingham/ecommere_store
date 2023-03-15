import "./App.css";
import StoreContainer from "./containers/StoreContainer";
import styled from "styled-components";

function App() {

  return (
    <Application className="App">
      <StoreContainer />
    </Application>
  );
}

export default App;

const Application = styled.div`
  background-color: #c2d0d0;
`;