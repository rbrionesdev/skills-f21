import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { Container } from "semantic-ui-react";
import { Route, Switch } from "react-router";
import Home from "./pages/Home";
import Grades from "./pages/Grades";
import GradesWithAxiosHook from "./pages/GradesWithAxiosHook";
import Users from "./pages/Users";
import UserListLoader from "./pages/UsersListLoader";
import Skills from "./pages/Skills";

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/grades" component={Grades} /> */}
          <Route exact path="/grades" component={GradesWithAxiosHook} />
          <Route exact path="/users" component={UserListLoader} />
          <Route exact path="/skills" component={Skills} />
          <Route component={() => <p>react router 404 path not found</p>} />
        </Switch>
      </Container>
    </>
  );
}

export default App;
