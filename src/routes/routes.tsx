
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import BookDetails from '../pages/BookDetails';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import NotFound from '../pages/NotFound';
import UpdateBook from '../pages/UpdateBook';
import AddNewBook from '../pages/AddNewBook';
import AllBookPage from '../pages/AllBookPage';
import PrivateRoute from './PrivateRoute';

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/all-books',
        element: <AllBookPage />,
      },
      {
        path: "/book-details/:id",
        element: <BookDetails />
      },
      {
        path: "/book-update/:id",
        element: <PrivateRoute><UpdateBook /></PrivateRoute>
      },
      {
        path: "/add-new-book",
        element: <PrivateRoute>
          <AddNewBook />
        </PrivateRoute>
      }
    ]
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
])




export default routes