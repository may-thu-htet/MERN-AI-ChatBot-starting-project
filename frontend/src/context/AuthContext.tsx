import {
  createContext,
  ReactNode,
  useEffect,
  useState,
  useContext,
} from "react";

type User = {
  id: number;
  name: string;
  email: string;
};

type UserAuth = {
  isLoggedIn: boolean;
  user: User | null;
  login: (email: String, password: String) => Promise<void>;
  signup: (name: String, email: String, password: String) => Promise<void>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<UserAuth | null>(null);
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // fetch if the user's cookie is valid then skip login
  }, []);

  const login = async (email: String, password: String) => {
    setIsLoggedIn(true);
  };

  const signup = async (name: String, email: String, password: String) => {
    setIsLoggedIn(true);
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

export const useAuth = () => useContext(AuthContext);
