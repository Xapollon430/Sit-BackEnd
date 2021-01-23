import Landing from "./Components/Landing/Landing";
import SearchSitter from "./Components/SearchSitter/SearchSitter";
import Auth from "./Components/Auth/Auth";
import Inbox from "./Components/Inbox/Inbox";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import styled from "styled-components";
import * as actions from "./store/actions";
import { StoreContext } from "./store/store";
import { Route, Switch } from "react-router-dom";
import { useEffect, useContext } from "react";

const BigBoi = styled.h1`
  font-size: 15rem;
  width: 100vw;
  height: 100vh;
`;

const Joke = () => {
  return <BigBoi>THEY ARENT BRO!</BigBoi>;
};

const App = () => {
  const [_, dispatch] = useContext(StoreContext);

  useEffect(() => {
    const autoLogin = async () => {
      try {
        let response = await fetch(
          `${process.env.SITTERSCAPE_API_URL}/api/auto-login`,
          {
            credentials: "include",
          }
        );

        if (response.status != 200) {
          throw await response.text();
        }
        let data = await response.json();

        dispatch(
          actions.generalDispatchBundler({
            user: data.user,
            loggedIn: true,
            accessToken: data.accessToken,
          })
        );
      } catch (e) {
        dispatch(
          actions.generalDispatchBundler({
            user: null,
            loggedIn: false,
            accessToken: null,
          })
        );
      }
    };

    autoLogin();
    setInterval(autoLogin, 1200000);
  }, []);

  return (
    <Switch>
      <Route exact path="/" render={() => <Landing />} />
      <Route exact path="/search" render={() => <SearchSitter />} />
      <Route exact path="/auth" render={() => <Auth />} />
      <PrivateRoute path="/inbox" render={() => <Inbox />} />
      <PrivateRoute path="/sitter-form" render={() => <Joke />} />
    </Switch>
  );
};

export default App;
