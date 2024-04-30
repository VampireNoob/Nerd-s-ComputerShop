import { useSelector, useDispatch } from "react-redux";
import { getSelectedCategory, filterCategory } from "../../redux/productSlice";

const Filter = ({category}) => {
    const dispatch = useDispatch();
    const selectedCategory = useSelector(getSelectedCategory)
    return (
        <div className="filters">
            <p onClick={() => dispatch(filterCategory(category))} className={selectedCategory === category ? "categorySelected categoryButton" : "categoryButton"}>{category}</p>
        </div>
    )
}

export default Filter;