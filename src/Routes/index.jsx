import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Cadastro from "../Pages/Cadastro";
import Home from "../Pages/Home";
import Login from "../Pages/Login";

function Routes() {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@KenzieHub:token"));
    if (token) {
      return setAuthenticated(true);
    }
  }, [authenticated]);

  return (
    <Switch>
      <Route exact path="/">
        <Login
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />
      </Route>
      <Route path="/home">
        <Home authenticated={authenticated} setAuthenticated={setAuthenticated} />
      </Route>
      <Route path="/cadastro">
        <Cadastro authenticated={authenticated} />
      </Route>
    </Switch>
  );
}
export default Routes;
