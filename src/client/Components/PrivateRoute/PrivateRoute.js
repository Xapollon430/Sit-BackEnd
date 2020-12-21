import { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { StoreContext } from "../../store/store";

const PrivateRoute = ({ render: C, path }) => {
  const [state] = useContext(StoreContext);

  return (
    <Route
      exact
      path={path}
      render={() => {
        state.isLoggedIn ? (
          <C />
        ) : (
          <Redirect to={`/auth?next=${path}&type=signUp`} />
        );
      }}
    />
  );
};

export default PrivateRoute;
