
import { Auth0Provider } from "@auth0/auth0-react"
import { useNavigate } from "react-router-dom"

type Props={
    children:React.ReactNode
}
const Auth0ProviderWithNavigate=({children}:Props)=>{
   
    const domain=import.meta.env.VITE_AUTH0_DOMAIN
    const clientId=import.meta.env.VITE_AUTH0_CLIENT_ID
    const redirectUri=import.meta.env.VITE_AUTH0_CALLBACK_URL
    const audience=import.meta.env.VITE_AUTH0_AUDIENCE
    const navigate=useNavigate()
    // const {getAccessTokenSilently}=useAuth0()

    if(!domain || !clientId || !redirectUri || !audience){
        throw new Error("unable to initialise auth")
    }
    const onRedirectCallback=async ()=>{
        // const token=await getAccessTokenSilently()
        // console.log("token",token);
        
        navigate("/auth-callback")
    //  console.log("USER",user);
    
     
    }
    return(
        <Auth0Provider domain={domain} clientId={clientId}
        authorizationParams={{redirect_uri:redirectUri,audience}}
        onRedirectCallback={onRedirectCallback}>
            {children}
        </Auth0Provider>
    )
   
}
export default Auth0ProviderWithNavigate
