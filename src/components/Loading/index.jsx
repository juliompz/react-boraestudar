import "./loading.css"
import imageLoading from "../../assets/macaco-loading.png"

export default function Loading(){
    return <>
    
        <div className="loading">
            <img src={imageLoading} alt="Carregando..." />
            <p className="loading-text">Carregando</p>
        </div>
    
    </>
}