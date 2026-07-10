import { useDispatch } from "react-redux"
import { popularProducts} from "../../data/dataProducts"
import { removeFromCart } from '../../redux/cartSlice'
import { FaRegTrashAlt } from "react-icons/fa";
import { motion } from "framer-motion"


const CartItem = ({cartItem}) => {
    const items = popularProducts.find(item => item.id === cartItem.itemId)
    const dispatch = useDispatch();

    return (
        <div className="cartItem-container">
            <div className="left">
                <img src={`../${items.img}.png`} className="cartItem-img"  alt="item"/>
            </div>

                <div className="box1-cartItem">
                    <p className="cartItem-title">{items.name}</p>
                    <div className="box2-cartItem">
                        <p className="cartItem-quantity-price">Menge: {cartItem.quantity}</p>
                        <p className="cartItem-quantity-price cartItem-price">Summe: {(items.price * cartItem.quantity).toFixed(2)} €</p>
                    </div>
                </div>
            <div className="right" >
                <motion.span className="trash" whileHover={{color: '#e28301'}} onClick={() => dispatch(removeFromCart({cartItemId: cartItem.id}))}>
                    <FaRegTrashAlt />
                </motion.span>
            </div>
        </div>
    )
}

export default CartItem;