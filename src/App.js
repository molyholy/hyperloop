import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.scss";
import { Content } from "carbon-components-react/lib/components/UIShell";
import StudioHeader from "./components/StudioHeader";
import MainPage from "./components/MainPage";
import DocumentInfo from "./components/DocumentInfo";

class App extends Component {
  render() {
    return (
      <>
        <StudioHeader />

        <Content>
          <MainPage />
          <DocumentInfo />
        </Content>
      </>
    );
  }
}

export default App;
