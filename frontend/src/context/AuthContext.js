import { useState, createContext, useEffect, useCallback } from "react";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const storedAuthTokens = localStorage.getItem("authTokens");

  const [authTokens, setAuthTokens] = useState(
    storedAuthTokens ? JSON.parse(storedAuthTokens) : null
  );
  const [user, setUser] = useState(
    storedAuthTokens ? jwtDecode(storedAuthTokens) : null
  );

  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const loginUser = (e) => {
    e.preventDefault();
    axios
      .post("/api/token/", {
        email: e.target.username.value,
        password: e.target.password.value,
      })
      .then((res) => {
        setAuthTokens(res.data);
        setUser(jwtDecode(res.data.access));
        localStorage.setItem("authTokens", JSON.stringify(res.data));
        navigate("/");
      })
      .catch((err) => {
        //TODO: Add Error Handling
        alert(err);
      });
  };

  const logoutUser = useCallback(() => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem("authTokens");
    navigate("/login");
  }, [navigate]);

  const contextData = {
    authTokens,
    user,
    loginUser,
    logoutUser,
  };

  const updateToken = useCallback(() => {
    axios
      .post("/api/token/refresh/", {
        refresh: authTokens?.refresh,
      })
      .then((res) => {
        setAuthTokens(res.data);
        setUser(jwtDecode(res.data.access));
        localStorage.setItem("authTokens", JSON.stringify(res.data));
      })
      .catch((err) => {
        logoutUser();
      });

    if (loading) {
      setLoading(false);
    }
  }, [authTokens, loading, logoutUser]);

  useEffect(() => {
    if (loading) {
      updateToken();
    }

    let fourMinutes = 1000 * 60 * 4;

    let interval = setInterval(() => {
      if (authTokens) {
        updateToken();
      }
    }, fourMinutes);

    return () => clearInterval(interval);
  }, [authTokens, loading, updateToken]);

  return (
    <AuthContext.Provider value={contextData}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
};
