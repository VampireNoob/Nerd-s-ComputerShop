import { teams } from "../../../data/dataProducts";
import TeamItem from "./TeamItem";
import './team.css';

const Team = () => {
    return (
        <div className="category-container">
            {teams.map(item => (
            <TeamItem item={item} key={item.id}/>
        ))} 
        </div>
    )
}

export default Team;