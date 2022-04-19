import { useState, createContext, useEffect } from "react";
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
        localStorage.setItem('authTokens', JSON.stringify(res.data))
        navigate("/");
      })
      .catch((err) => {
        //TODO: Add Error Handling
        alert(err);
      });
  };

  const logoutUser = () => {
    setAuthTokens(null)
    setUser(null)
    localStorage.removeItem('authTokens')
    navigate('/login')
  }

  const contextData = {
    authTokens,
    user,
    loginUser,
    logoutUser,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
