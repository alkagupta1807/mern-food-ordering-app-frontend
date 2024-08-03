import { useAuth0 } from "@auth0/auth0-react"
import { Button } from "./ui/button"
import UsernameMenu from "./UsernameMenu"
import './MainNav.css'

const MainNav=()=>{
    const {loginWithRedirect,isAuthenticated}=useAuth0()

    return(
        <span className="d-flex align-items-center gap-2">
            {isAuthenticated?<UsernameMenu/>: (<Button variant="ghost" 
            className="btn fw-bold hover-effect"
        onClick={async()=>await loginWithRedirect()}>LogIn</Button>)}
        </span>
       
    )
}
export default MainNav