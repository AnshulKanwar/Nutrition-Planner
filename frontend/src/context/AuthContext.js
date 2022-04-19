import { useState, createContext } from "react";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {

  const [authTokens, setAuthTokens] = useState(null);
  const [user, setUser] = useState(null);

  const navigate = useNavigate()

  const loginUser = (e) => {
    e.preventDefault();
    axios
      .post("/api/token/", {
        email: "anshul@gmail.com",
        password: "test123",
      })
      .then((res) => {
        setAuthTokens(res.data)
        setUser(jwtDecode(res.data.access))
        navigate('/')
      })
      .catch((err) => {
        //TODO: Add Error Handling
        alert(err)
      });
  };

  const contextData = {
    authTokens,
    user,
    loginUser,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
