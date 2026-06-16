import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import LinkExpired from "./pages/LinkExpired";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<ForgotPassword />}
        />

        <Route
          path="/forgot-password"
          element={<ForgotPassword />}
        />

        <Route
          path="/reset-password/:token"
          element={<ResetPassword />}
        />

        <Route
          path="/link-expired"
          element={<LinkExpired />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
