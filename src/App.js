import { Routes, Route } from "react-router-dom";
import LoginSignup from "./Pages/Index/Index";
import Download from "./Pages/Download/Download";
import Premium from "./components/Premium/Premium";
import Support from "./Pages/Support/Support";
import LandingPage from "./Pages/LandingPage/LandingPage";
import IsProtectedRoute from "./hoc/IsProtectedRoute";
function App() {
  return (
    <div>
      <Routes>
        <Route element={<IsProtectedRoute />}>
          <Route path="" element={<LandingPage />} />

          <Route path="/premium" element={<Premium />} />
          <Route path="/support" element={<Support />} />
          <Route path="/download" element={<Download />} />
          <Route path="/sign-up" element={<LoginSignup />} />

          <Route path="*" element={<h1>404</h1>} />
        </Route>

        <Route path="/login" element={<LoginSignup />} />
      </Routes>
    </div>
  );
}

export default App;
