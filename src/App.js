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
import MakeAdmin from "./pages/Home/Dashboard/Admin/makeAdmin";
import AllBlogs from "./pages/Home/Dashboard/Admin/AllBlogs";
import MyBlogs from "./pages/Home/Dashboard/User/MyBlogs";
import AdminRoute from "./pages/Home/Security/AdminRoute/AdminRoute";
import UpdateBlogs from "./pages/Home/Dashboard/Admin/UpdateBlogs";
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

            <Route path="/dashboard" element={<PrivateRoute>
              <Dashboard />
            </PrivateRoute>} >
            
              {/* Admin */}
              <Route path="/dashboard/addBlogs" element={<AdminRoute>
                <AddBlogs />
            </AdminRoute>} />

              <Route path="/dashboard/makeAdmin" element={<AdminRoute>
                <MakeAdmin />
              </AdminRoute>} />
              
              <Route path="/dashboard/allBlogs" element={<AdminRoute>
                <AllBlogs />
              </AdminRoute>} />

              <Route path="/dashboard/updateOrders/:id" element={<AdminRoute>
                <UpdateBlogs />
              </AdminRoute>} />
              
             {/* user */}
              
              <Route path="/dashboard/myBlogs" element={<PrivateRoute>
                <MyBlogs />
              </PrivateRoute>} />
              <Route path="/dashboard/addBlog" element={<PrivateRoute>
                <AddBlogs />
            </PrivateRoute>} />
              
            </Route>




           
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
