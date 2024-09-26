import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { Helmet } from "react-helmet";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Loader from "./pages/Loader";
import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import Classes from "./pages/Classes";
import Progress from "./pages/Progress";
import Messages from "./pages/Messages";
import Notifications from "./pages/Notifications";
import Settings from "./pages/Settings";
import TimeSpent from "./components/TimeSpent";
import ChatBox from "./pages/Chatbox";
import ContextProvider from "./Context/Context";
import Reward from "./pages/Reward";


export function App() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Set a timeout of 1 minute (60000 milliseconds) before navigating to the Signup page
    const timer = setTimeout(() => {
      setLoading(false);
      navigate("/signup"); // Navigate to /signup
    }, 6000);

    // Cleanup the timer on component unmount
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <>
      <Helmet>
        <title>{loading ? "Loading ..." : "Signup"}</title>
      </Helmet>
      {loading ? <Loader /> : <Signup />}
    </>
  );
}





export default function AppWrapper() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/login"
          element={
            <>
              <Helmet>
                <title>Login</title>
              </Helmet>
              <Login />
            </>
          }
        />

        <Route
          path="/dashboard"
          element={
            <>
              <Helmet>
                <title>Dashboard Page</title>
              </Helmet>
              <Dashboard  />
            </>
          }
        />

        <Route
          path="/courses"
          element={
            <>
              <Helmet>
                <title>Courses Page</title>
              </Helmet>
              <Courses />
            </>
          }
        />

        <Route
          path="/classes"
          element={
            <>
              <Helmet>
                <title>Classes Page</title>
              </Helmet>
              <Classes />
            </>
          }
        />

        <Route
          path="/progress"
          element={
            <>
              <Helmet>
                <title>Progress Page</title>
              </Helmet>
              <Progress />
            </>
          }
        />

        <Route
          path="/messages"
          element={
            <>
              <Helmet>
                <title>Messages Page</title>
              </Helmet>
              <Messages />
            </>
          }
        />

        <Route
          path="/notifications"
          element={
            <>
              <Helmet>
                <title>Notifications Page</title>
              </Helmet>
              <Notifications />
            </>
          }
        />

        <Route
          path="/settings"
          element={
            <>
              <Helmet>
                <title>Settings Page</title>
              </Helmet>
              <Settings />
            </>
          }
        />

        <Route
          path="/timeSpent"
          element={
            <>
              <Helmet>
                <title>TimeSpent</title>
              </Helmet>
              <TimeSpent />
            </>
          }
        />
        <Route
          path="/chatBox"
          element={
            <>
              <Helmet>
                <title>ChatBox</title>
              </Helmet>
              <ContextProvider>
                <ChatBox />
              </ContextProvider>
            </>
          }
        />

<Route
          path="/reward"
          element={
            <>
              <Helmet>
                <title>Reward</title>
              </Helmet>
              <Reward />
            </>
          }
        />
      </Routes>
    </Router>
  );
}
