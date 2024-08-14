import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";

import Signup from "./components/pages/Signup";
import NotFound from "./components/pages/NotFound";
import { useAuth } from "./context/AuthContext";
import Home from "./components/pages/home";
import Login from "./components/pages/login";
import Chat from "./components/pages/chat";

function App() {
  const auth = useAuth();
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {auth?.isLoggedIn && auth.user && (
          <Route path="/chat" element={<Chat />} />
        )}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}

export default App;
