import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Auth, Dashboard } from "./Components";
import { Container } from "reactstrap";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Switch>
          <Route exact path="/" component={Auth} />
          <Route path="/dashboard" component={Dashboard} />
          <Route render={_ => <h1>404 Not Found</h1>} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
