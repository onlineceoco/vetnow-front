import { useSelector } from "react-redux";
import Login from "../../pages/login";

const WithAuth = Component => {
  const Auth = props => {
    const authState = useSelector(state => state.auth);
    // Login data added to props via redux-store (or use react context for example)

    // If user is not logged in, return login component
    if (!authState.isAuthenticated) {
      return <Login />;
    }

    // If user is logged in, return original component
    return <Component {...props} />;
  };

  // Copy getInitial props so it will run as well
  if (Component.getInitialProps) {
    Auth.getInitialProps = Component.getInitialProps;
  }

  return Auth;
};

export default WithAuth;
