
import {createBrowserRouter } from "react-router"
import App from "./App"
import Login from "./features/authentication/pages/Login"
import Register from "./features/authentication/pages/Register"
import Feed from "./features/posts/pages/Feed"
import Protected from "./features/authentication/components/Protected"
import Public from "./features/authentication/components/Public"

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
                element :<Public> <Register/></Public>
            },
           

        ]
    },
     {
                path:"/feed",
                element :<Protected> <Feed/></Protected>
     }
])


export default router;