import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import RootLayout from './layouts/RootLayout';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={<RootLayout />}
      >
        Home
      </Route>
    )
  );

  return (
    <div className="justify-center min-h-screen items-center">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
