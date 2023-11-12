import { lazy } from "react";
import Layout from "./components/layout/Layout";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import ErrorPage from "./pages/ErrorPage";
import Signup from "pages/Signup";
import Protected from "components/protected/Protected";

function App() {
  const HomePage = lazy(() => import("./pages/Homepage"));
  const Project = lazy(() => import("./pages/Projects"));
  const Task = lazy(() => import("./pages/Tasks"));

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Layout />}>
          <Route path="home" element={<Protected Component={<HomePage />} />} />
          <Route
            path="project"
            element={<Protected Component={<Project />} />}
          />
          <Route path="tasks" element={<Protected Component={<Task />} />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
