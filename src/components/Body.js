import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";
import { useEffect, useState } from "react"; 

const Body = () => {

  // Local State Variable - Super Powerful variable

  const [listOfRestaurants, setListOfRestaurants] = useState([]);


  useEffect(()  => {
    // API call
    fetchData();
  },[]);

const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    //setListOfRestaurants(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    //Optional Chaining
    setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  if(listOfRestaurants.length === 0) {
    return <h1>Loading...</h1>;
  }


  // Normal JS variable
  // let listOfRestaurants = [
  //   {
  //     info: {
  //       id: "485933",
  //       name: "Dindigul Thalappakatti",
  //       cloudinaryImageId: "cluiug5t7vmz7idrhh82",

  //       costForTwo: "₹500 for two",
  //       cuisines: ["South Indian", "Biryani", "Chinese", "North Indian"],
  //       avgRating: 4.3,
  //       avgRatingString: "4.3",
  //     },
  //   }, {
  //     info: {
  //       id: "485934",
  //       name: "KFC",
  //       cloudinaryImageId: "cluiug5t7vmz7idrhh82",

  //       costForTwo: "₹500 for two",
  //       cuisines: ["South Indian", "Biryani", "Chinese", "North Indian"],
  //       avgRating: 3.3,
  //       avgRatingString: "3.3",
  //     },
  //   }, {
  //     info: {
  //       id: "485935",
  //       name: "Dindigul ",
  //       cloudinaryImageId: "cluiug5t7vmz7idrhh82",

  //       costForTwo: "₹500 for two",
  //       cuisines: ["South Indian", "Biryani", "Chinese", "North Indian"],
  //       avgRating: 4.4,
  //       avgRatingString: "4.3",
  //     },
  //   },
  // ];
  return (
    <div className="body">
      {/* <div className="search">
          <input type="text" placeholder="Search" />
          <button>Search</button>
        </div> */}
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            console.log("Button Cliked");
            const filteredList = listOfRestaurants.filter (
              (restaurant) => 
               restaurant.info.avgRating > 4
            );
            setListOfRestaurants(filteredList);
            console.log(listOfRestaurants);
          }}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurant-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resObj={restaurant} />
        ))}
      </div>
    </div>
  );
};

  export default Body;