import { useNavigate } from "react-router-dom";
import './buttons.css';


const ContinueShopping = () => {

    const navigate = useNavigate();
    const navigateTo = () => {
        navigate('/shop'); 
        }
    return(
        <div className='icon-cart'>
            <button className='btn-cart-box' onClick={navigateTo}>
                WEITER EINKAUFEN
            </button>
            
        </div>
    )
}

export default ContinueShopping;