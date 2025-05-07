import { CDN_URL } from "../utils/constants";


const RestaurantCard = (props) => {
    const { resObj } = props;
    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } = resObj?.info;
    return (
      <div className="restaurant-card">
        <img
          className="res-logo"
          src={CDN_URL + cloudinaryImageId}
          alt="Restaurant"
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} ⭐</h4>
        <h4>{costForTwo}</h4>
      </div>
    );
  };
  export default RestaurantCard;