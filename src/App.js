import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.scss";
import { Button } from "carbon-components-react";
import { Content } from "carbon-components-react/lib/components/UIShell";
import StudioHeader from "./components/StudioHeader";

class App extends Component {
  render() {
    return (
      <>
        <StudioHeader />
        <Content>
          <Button>Button</Button>
        </Content>
      </>
    );
  }
}

export default App;
