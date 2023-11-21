import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Time from "./routes/Time"
import UserForm from "./routes/UserForm"

  const router = createBrowserRouter([
    {
      path: '/',
      element: <UserForm />
    },
    {
      path: '/time',
      element: <Time />
    }
  ])

function App() {


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
