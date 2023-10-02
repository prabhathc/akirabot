import React, { useState, createContext } from "react";
import { useRouter } from "next/router";

const AuthContext = createContext(null);

const useAuth = () => {
  return React.useContext(AuthContext);
};

export default function AuthProvider({ children }) {
  const [token, setToken] = useState(null);
  const router = useRouter();

  const handleLogin = async () => {
    const cookies = document.cookie.split(";");
    let authToken = cookies.find((cookie) =>
      cookie.trim().startsWith("__disctkn=")
    );
    if (authToken != undefined) {
      authToken = authToken.replace("__disctkn=", "");
      setToken(authToken);
      router.push("/dashboard");
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
