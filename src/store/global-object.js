import { createContext } from "react";

const GlobalObj = createContext({
    apiUrl:"http://localhost:7000",
    currUser:{},
    changeUser:() =>{},
})
export default GlobalObj