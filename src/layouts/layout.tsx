import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Hero from "@/components/Hero"

type Props={
children:React.ReactNode,
showHero?:boolean
}

const Layout=({children,showHero=false}:Props)=>{
return(
    <div className="d-flex flex-column min-vh-100">
        <Header/>
        {showHero && <Hero/>}
       
        <div className="container mx-auto flex-grow-1 py-4">{children}</div>
        <Footer/>
    </div>
)
}
export default Layout