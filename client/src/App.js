import NavBar from "./components/NavBar/NavBar";
import Edit from "./views/Edit/Edit";
import { Landing, Home, Detail, Form } from "./views/index"
import { Route, useLocation } from "react-router-dom";




function App() {
  const location = useLocation()


  return (
    <div>
      {location.pathname !== "/"&& <NavBar/>}

      <Route exact path="/">
        <Landing />
      </Route>

      <Route path="/home">
        <Home />
      </Route>

      <Route path="/detail">
        <Detail />
      </Route>

      <Route path="/create">
        <Form />
      </Route>

      <Route path="/edit">
        <Edit/>
      </Route>
    </div>
  );
}

export default App;
