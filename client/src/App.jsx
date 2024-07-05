import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Sidebar from "./components/SideBar";
import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";
import Roadmap from "./pages/Roadmap";
import Courses from "./pages/Courses";
import Community from "./pages/Community";
import ReportBug from "./pages/ReportBug";
import CodeEditor from "./pages/CodeEditor";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import HomePage from "./pages/HomePage";

const AppContent = () => {
  const { pathname } = useLocation();
  const showSidebar = pathname !== "/";

  return (
    <div className="flex bg-red-400 w-full justify-end">
      {showSidebar && <Sidebar />}
      <div className="bg-green-400 w-full md:w-[85vw] pt-20">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/community" element={<Community />} />
          <Route path="/report-bug" element={<ReportBug />} />
          <Route path="/code-editor" element={<CodeEditor />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <>
      <Navbar />
      <AppContent />
    </>
  );
};

export default App;
