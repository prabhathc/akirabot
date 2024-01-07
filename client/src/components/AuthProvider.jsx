import React, { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AuthContext = createContext(null);

export const useAuth = () => {
  return React.useContext(AuthContext);
};

export default function AuthProvider({ children }) {
  const [token, setToken] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // When the token is set, navigate to the dashboard
    if (token) {
      navigate("/dashboard");
    }
  }, [token, navigate]);

  const handleLogin = async () => {
    const cookies = document.cookie.split(";");
    let authToken = cookies.find((cookie) =>
      cookie.trim().startsWith("__disctkn=")
    );
    if (authToken !== undefined) {
      authToken = authToken.replace("__disctkn=", "");
      setToken(authToken);
    } else {
      console.log("NO AUTH TOKEN");
    }
  };

  const handleLogout = () => {
    setToken(null);
    navigate("/"); // Optionally navigate to a different route on logout
  };

  const sendRequest = async (url, method, data) => {
    try {
      const response = await axios({
        method,
        url,
        data,
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return response.data;
    } catch (error) {
      console.error('API request error:', error);
      throw error;
    }
  };

  const value = {
    token,
    handleLogin,
    handleLogout,
    sendRequest
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
