import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home/Home";
import Header from "./pages/Home/Header/Header";
import Footer from "./pages/Home/Footer/Footer";
import Login from "./pages/Home/Security/Login/Login";
import Register from "./pages/Home/Security/Register/Register";
import AuthProvider from "./Context/AuthProvider";
import AddBlogs from "./pages/Home/Dashboard/Admin/AddBlogs";
import Dashboard from "./pages/Home/Dashboard/Dashboard/Dashboard";
import Post from "./pages/Home/Blogs/Post/Post";
import PrivateRoute from "./pages/Home/Security/PrivateRoute/PrivateRoute";
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route
              path="/posts/:id"
              element={
                <PrivateRoute>
                  <Post />
                </PrivateRoute>
              }
            />

            <Route path="/dashboard" element={<Dashboard />} />

            <Route path="/addBlogs" element={<AddBlogs />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
