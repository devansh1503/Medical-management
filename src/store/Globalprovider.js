import { useReducer } from "react"
import GlobalObj from "./global-object"

const defaultValue = {
    apiUrl:"http://localhost:7000",
    currUser:{}
}

const globReducer = (state,action) => {
    if(action.type === "ADD"){
        const newUser = action.item
        console.log(action.item, "added successfully")
        return{
            currUser:newUser
        }
    }
    return defaultValue
}
function Globalprovider(props){
    const[globstate, dispatchAction] = useReducer(globReducer,defaultValue)
    const addUserHandle = (item) => {
        dispatchAction({type:"ADD", item:item})
    }
    const globcontext = {
        apiUrl:globstate.apiUrl,
        currUser:globstate.currUser,
        changeUser:addUserHandle
    }
    return (
        <GlobalObj.Provider value={globcontext}>
            {props.children}
        </GlobalObj.Provider>
    )
}

export default Globalprovider