
import {createBrowserRouter } from "react-router"
import App from "./App"
import Login from "./features/authentication/pages/Login"
import Register from "./features/authentication/pages/Register"
import Feed from "./features/posts/pages/Feed"

const router = createBrowserRouter([
    {
        path : '/',
        element : <App/>,
        children : [
            {
                path : "/login", 
                element : <Login/>
            }, 
            {
                path : '/register', 
                element : <Register/>
            },
           

        ]
    },
     {
                path:"/feed",
                element : <Feed/>
     }
])


export default router;