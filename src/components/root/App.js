import React from "react";
import { Container } from "reactstrap";
import Navi from "../navi/Navi";
import Dashboard from "./Dashboard";
import { Route, Switch } from "react-router-dom";
import MyListDetail from "../myList/MyListDetail";
import AddOrUpdateWord from "../words/AddOrUpdateWord";
import NotFound from "../common/NotFound";
function App() {
  return (
    <Container>
      <Navi />
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/word" component={Dashboard}></Route>
        <Route path="/saveWord/:wordId" component={AddOrUpdateWord}></Route>
        <Route path="/saveWord/" component={AddOrUpdateWord}></Route>
        <Route path="/myList" component={MyListDetail}></Route>
        <Route component={NotFound} />
      </Switch>
    </Container>
  );
}

export default App;
