import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from "./components//Blog.js";
import { PostProvider } from "./components/Context/PostContext.jsx";

import SignUp from "./Pages/Signup.js";
import SignIn from "./Pages/Sigin.js";
import { AccountsProvider } from "./components/Context/AccountsContext.jsx";
import { AuthProvider } from "./components/Context/AuthContext.jsx";
import Category from "./components/Category.js";
import PostDetail from "./components/PostDetail.js";
import Dashboard from "./components/Dashboard/Dashboard.js";

function App() {
  return (
    <>
      <BrowserRouter>
        <AccountsProvider>
          <AuthProvider>
            <PostProvider>
              <Routes>
                <Route index element={<Blog />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/dash" element={<Dashboard />} />

                <Route path="/category/:cat" element={<Category />} />
                <Route path="/post/:id" element={<PostDetail />} />
              </Routes>
            </PostProvider>
          </AuthProvider>
        </AccountsProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
