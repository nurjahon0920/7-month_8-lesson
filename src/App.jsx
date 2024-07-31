import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./hooks/useAuth";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Teacher from "./pages/Teacher";
import Student from "./pages/Student";
import Cakes from "./components/Cakes";
import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => {
  return (
    <div>
      {/* <PrivateRoute>  */}
      <Router>
        <AuthProvider>
          <Provider store={store}>
            <Routes>
              <Route
                exact
                path="/teacher"
                element={
                  // <PrivateRoute>
                  <Teacher />
                  // </PrivateRoute>
                }
              />
              <Route path="/" element={<Login />} />
              <Route exact path="/student" element={<Student />} />
              <Route exact path="/cakes" element={<Cakes />} />
              <Route
                path="/profile"
                element={
                  // <PrivateRoute>
                  <Profile />
                  // </PrivateRoute>
                }
              />
            </Routes>
          </Provider>
        </AuthProvider>
      </Router>
    </div>
  );
};

export default App;
