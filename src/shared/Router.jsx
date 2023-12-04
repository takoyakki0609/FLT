import Join from "components/Join";
import Login from "components/common/Login";
import Profile from "components/common/Profile";
import Detail from "pages/Detail";
import Home from "pages/Home";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

export default function Router() {
  const isLogin = useSelector((state) => state.auth.isLogin);

  return (
    <BrowserRouter>
      <Routes>
        {isLogin ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Login />} />
            <Route path="/join" element={<Join />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}
