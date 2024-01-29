import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './pages/ErrorPage.jsx'
import Home from './pages/Home.jsx'
import PostDetails from './pages/PostDetails.jsx'
import Register from './pages/Register.jsx'
import Login from './pages/Login.jsx'
import UserProfile from './pages/UserProfile.jsx'
import Authors from './pages/Authors.jsx'
import CreatePost from './pages/CreatePost.jsx'
import CategoryPosts from './pages/CategoryPosts'
import AuthorPosts from './pages/AuthorPosts.jsx'
import Dashboard from './pages/Dashboard.jsx'
import EditPost from './pages/EditPost.jsx'
import Logout from './pages/Logout.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'posts/:id',
        element: <PostDetails />
      },
      {
        path: 'register',
        element: <Register />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'profile/:id',
        element: <UserProfile />
      },
      {
        path: 'authors',
        element: <Authors />
      },
      {
        path: 'create',
        element: <CreatePost />
      },
      {
        path: 'post/categories/:category',
        element: <CategoryPosts />
      },
      {
        path: 'posts/user/:id',
        element: <AuthorPosts />
      },
      {
        path: 'myposts/:id',
        element: <Dashboard />
      },
      {
        path: 'posts/:id/edit',
        element: <EditPost />
      },
      {
        path: 'logout',
        element: <Logout />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
