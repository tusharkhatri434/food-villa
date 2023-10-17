import { createContext } from "react";

const UserContext = createContext({
    user:{
        name:"Dummy",
        email:"example@gmail.com"
    }
})

export default UserContext;