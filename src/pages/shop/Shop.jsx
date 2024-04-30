import AllCategories from "../../components/Filter/AllCategories"
import Products from "../../components/ProductComponent/Products";
import './shop.css'


const Shop = () => {
    
    return(
        <div>
            <div className="product">
                <div className="filter-block">
                    <AllCategories />
                </div>

                <div className='product-block' >
                    <Products  />
                </div>
            </div>
        </div>
    )
}
export default Shop;