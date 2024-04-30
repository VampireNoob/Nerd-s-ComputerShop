import './team.css';


const TeamItem = ({item}) => {
    return (
        <div className="item-container" data-aos="fade-up" data-aos-duration="1500">
            <img className="category-img" src={`${item.img}.jpg`} alt="trend-img" />
            <div className="info-cat">
                <h3 className="category-title">{item.title}</h3>
            </div>
        </div>
    )
}

export default TeamItem;