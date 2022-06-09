import { CircularProgress } from '@mui/material';
import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import ProtectedRoutes from '../security/Protected';
import TodoLayout from '../layouts/mainlayout/TodoLayout';

const Loadable = (Component) => (props) => {

  return (
    <Suspense fallback={<CircularProgress />}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />

      <Route path='/signup' element={<Register />} />

      <Route path='/todo' element={<TodoLayout />}>
        <Route
          path='/todo/'
          element={
            <ProtectedRoutes>
              <TodoList />
            </ProtectedRoutes>
          }
        />
        <Route
          path='/todo/view'
          element={
            <ProtectedRoutes>
              <TodoView />
            </ProtectedRoutes>
          }
        />
        <Route path='*' element={<PageNotFound />} />
      </Route>

      <Route path='/servererror' element={<ServerError />} />

      <Route path='*' element={<PageNotFound />} />
    </Routes>
  );
}

const Login = Loadable(lazy(() => import('../pages/authentication/Login')));
const Register = Loadable(lazy(() => import('../pages/authentication/Register')));
const PageNotFound = Loadable(lazy(() => import('../pages/errors/NotFound')));
const ServerError = Loadable(lazy(() => import('../pages/errors/ServerError')));
const TodoList = Loadable(lazy(() => import('../pages/main/Todo')));
const TodoView = Loadable(lazy(() => import('../pages/main/TodoView')));
