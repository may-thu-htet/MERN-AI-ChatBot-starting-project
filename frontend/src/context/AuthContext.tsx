import {
  createContext,
  ReactNode,
  useEffect,
  useState,
  useContext,
} from "react";
import { checkAuthStatus, loginUser } from "../helpers/api-communicator";

type User = {
  // id: number;
  name: string;
  email: string;
};

type UserAuth = {
  isLoggedIn: boolean;
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<UserAuth | null>(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // fetch if the user's cookie is valid then skip login
    async function checkStatus() {
      const data = await checkAuthStatus();
      if (data) {
        setUser({ name: data.name, email: data.email });
        setIsLoggedIn(true);
      }
    }
    checkStatus();
  }, []);

  const signup = async (name: string, email: string, password: string) => {
    setIsLoggedIn(true);
  };

  const login = async (email: string, password: string) => {
    console.log(email, password);
    const data = await loginUser(email, password);
    console.log(data);
    if (data) {
      setUser({ name: data.name, email: data.email });
      setIsLoggedIn(true);
    }
  };

  const logout = async () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  const value: UserAuth = {
    isLoggedIn,
    user,
    login,
    signup,
    logout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
