import { Routes, Route } from "react-router-dom";
import Layout from "./pages/components/Layout";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/components/NotFoundPage";
import Candidate from "./pages/canditate/Candidate";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/candidates" element={<Candidate />} />

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
