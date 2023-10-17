import React from "react";
import Layout from "./components/layout/Layout";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Homepage from "./pages/Homepage";
import Projects from "./pages/Projects";
import Tasks from "./pages/Tasks";
import Progress from "./pages/Progress";
import ErrorPage from "./pages/ErrorPage";
import Settings from "./pages/Settings";
import Signup from "pages/Signup";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Layout />}>
          <Route path="" element={<Homepage />} />
          <Route path="project" element={<Projects />} />
          <Route path="tasks" element={<Tasks />} />
          {/* <Route path="progress" element={<Progress />} />
          <Route path="settings" element={<Settings />} /> */}
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
