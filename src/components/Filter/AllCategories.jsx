import Filter from "../Filter/Filter";
import './filter.css';


const AllCategories = () => {
    return (<div className="cat">
            {['ALLE KATEGORIEN', 'LAPTOPS', 'PC', 'MONITORE', 'TASTATUREN', 'MÄUSE'].map((category, id) => <Filter category={category} key={id}/>
        )}
    </div>)
}

export default AllCategories;