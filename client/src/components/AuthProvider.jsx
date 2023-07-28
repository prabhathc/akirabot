import React, { useState, createContext } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext(null);
const useAuth = () => {
  return React.useContext(AuthContext);
};

export default function AuthProvider({ children }) {
  const [token, setToken] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async () => {
    const cookies = document.cookie.split(";");
    let authToken = cookies.find((cookie) =>
      cookie.trim().startsWith("__disctkn=")
    );
    if (authToken != undefined) {
      authToken = authToken.replace("__disctkn=", "");
      setToken(authToken);
      navigate("/dashboard");
    } else {
      // no authToken
      console.log("NO AUTH TOKEN");
      return undefined;
    }
  };

  const handleLogout = () => {
    setToken(null);
  };

  const value = {
    token,
    handleLogin,
    handleLogout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
export { useAuth };
