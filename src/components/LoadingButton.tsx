import { Loader2 } from "lucide-react"
import {Button} from "./ui/button"
import "./LoadingButton.css"

const LoadingButton=()=>{
    return(
        <Button disabled >
            <Loader2 className="me-2 animate-spin" />
            Loading

        </Button>
    )
}
export default LoadingButton