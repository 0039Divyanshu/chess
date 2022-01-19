import { useEffect, useState } from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
  useLocation
} from "react-router-dom";
import { GoogleLoginPage } from "./Login Page/GoogleLogin";
import ListOfMovesTable from "./ListOfMovesTable/ListOfMovesTable";

const App = () => {
  const [auth, setAuth] = useState(false);
  const [backendResponse, updateBackendResponse] = useState(null);
  const [userName, updateUserName] = useState("");
  const [obj, updateObj] = useState({
    email: "",
    profileImg: "",
    username: "",
  });
  const [isLoading, setShowLoader] = useState(true);
  
  
  const RequireAuth = ({path,children}) => {
    let location = useLocation();
    if (!auth) {
      return <Navigate to="/" state={{ from: location }} replace />;
    }

    return children;
  };

  const Auth = ({path,children}) => {
    const location = useLocation();
    if (auth) {
      setShowLoader(false);
      return <Navigate to={path} state={{ from: location }} replace />;
    }

    return children;
  };


  return (
    <Router>

      <Routes>

        <Route
          exact
          path="/homepage"
          element={
            <RequireAuth path="/">
              <ListOfMovesTable
              auth={auth}
              setAuth={setAuth}
              backendResponse={backendResponse}
              updateBackendResponse={updateBackendResponse}
              userName={userName}
              updateUserName={updateUserName}
              obj={obj}
              updateObj={updateObj}
               />
            </RequireAuth>
          }
        />

        <Route
          path="/"
          element={
            <Auth path="/homepage">
            <GoogleLoginPage
              auth={auth}
              setAuth={setAuth}
              backendResponse={backendResponse}
              updateBackendResponse={updateBackendResponse}
              userName={userName}
              updateUserName={updateUserName}
              obj={obj}
              updateObj={updateObj}
            />
            </Auth>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
