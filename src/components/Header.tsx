import { Link } from "react-router-dom"
import MobileNav from "./MobileNav"
import MainNav from "./MainNav"

const Header=()=>{
    return (
        <div className="border-bottom py-3"
         style={{borderBottomWidth:"2px",borderBottomColor:"#f97316"}}>
            <div className="container mx-auto d-flex justify-content-between align-items-center">
                <Link to="/" className="display-4 fw-bold" 
                style={{letterSpacing:'0.05em',color:'#f97316'}}>
                MernEats.com</Link>
                <div className="d-md-none"><MobileNav/></div>
                <div className="d-none d-md-block">
                    <MainNav/>
                </div>
            </div>
        </div>
    )
}

export default Header