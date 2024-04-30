import './product.css';
import { FaRegHeart } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"

const Product = ({product}) => { 
    return (
        <div className='cont' data-aos="fade-up" data-aos-duration="1500">
        <Link className="link" to={`/shop/${product.id}`}>
            <div  className="single-product-container">
                <div className="quader"></div>
                <img className="product-img" src={`./${product.img}.png`}  alt="product"/>
                <div className="product-info">
                    <div className="product-details">
                        <p>{product.name}</p>
                        <p>{product.price} €</p>
                            <div className='iconBox'>
                                <motion.span className="icon" whileHover={{color: '#e26600'}}>
                                    <FaRegHeart />
                                </motion.span>
                            </div>
                    </div>
                </div> 
            </div>
        </Link> 
        </div>
    )
}
export default Product;