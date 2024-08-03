import hero from "../assets/hero.png"
const Hero=()=>{
    return (
        <div>
            <img src={hero} className="w-100" style={{maxHeight:"600px",
                objectFit:"cover"
            }} />
        </div>
    )
}
export default Hero