import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
/**
 *
 * Header
 * -Logo
 * -nav items
 * Body
 * - Search
 * - RestaurantContainer
 *  - RestaurantCard
 *   - Image
 *   - Name , star rating, cuisine, delivery time
 * Footer
 * - Copyright
 * - Links
 * - Contact
 * - Address
 * - Social Media
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?size=large"
          style={{ height: "100px" }}
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { resObj} = props;
  const{cloudinaryImageId,name,cuisines,avgRating,costForTwo} = resObj?.info;
  return (
    <div className="restaurant-card">
      <img
        className="res-logo"
        src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}
        alt="Restaurant"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} ⭐</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

const restaurantList = [
  {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      "info": {
          "id": "485933",
          "name": "Dindigul Thalappakatti",
          "cloudinaryImageId": "cluiug5t7vmz7idrhh82",
          "locality": "Nexus",
          "areaName": "Koramangala",
          "costForTwo": "₹500 for two",
          "cuisines": [
              "South Indian",
              "Biryani",
              "Chinese",
              "North Indian"
          ],
          "avgRating": 4.3,
          "parentId": "332",
          "avgRatingString": "4.3",
          "totalRatingsString": "2.1K+",
          "sla": {
              "deliveryTime": 40,
              "lastMileTravel": 2.4,
              "serviceability": "SERVICEABLE",
              "slaString": "40-45 mins",
              "lastMileTravelString": "2.4 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2025-05-02 00:00:00",
              "opened": true
          },
          "badges": {},
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "ITEMS",
              "subHeader": "AT ₹179"
          },
          "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {}
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "--"
              }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
          "context": "seo-data-01a12946-5588-4a55-8e8f-665ac7c85ab2"
      },
      "cta": {
          "link": "https://www.swiggy.com/city/bangalore/dindigul-thalappakatti-nexus-koramangala-rest485933",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      "info": {
          "id": "1013619",
          "name": "Chinese Wok",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/24/15345730-3e92-4301-8bf8-d3d327d96ce2_1013619.jpg",
          "locality": "Koramangala",
          "areaName": "80 Feet Road",
          "costForTwo": "₹250 for two",
          "cuisines": [
              "Chinese",
              "Asian",
              "Tibetan",
              "Desserts"
          ],
          "avgRating": 4.3,
          "parentId": "61955",
          "avgRatingString": "4.3",
          "totalRatingsString": "227",
          "sla": {
              "deliveryTime": 28,
              "lastMileTravel": 0.5,
              "serviceability": "SERVICEABLE",
              "slaString": "25-30 mins",
              "lastMileTravelString": "0.5 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2025-05-01 23:00:00",
              "opened": true
          },
          "badges": {},
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "ITEMS",
              "subHeader": "AT ₹129"
          },
          "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {}
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "isNewlyOnboarded": true,
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "--"
              }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
          "context": "seo-data-01a12946-5588-4a55-8e8f-665ac7c85ab2"
      },
      "cta": {
          "link": "https://www.swiggy.com/city/bangalore/chinese-wok-koramangala-80-feet-road-rest1013619",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      "info": {
          "id": "5934",
          "name": "Burger King",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/24/6c37bd85-e460-4f35-9a27-ea97d88f4e3a_5934.jpg",
          "locality": "Koramangala",
          "areaName": "Koramangala",
          "costForTwo": "₹350 for two",
          "cuisines": [
              "Burgers",
              "American"
          ],
          "avgRating": 4.2,
          "parentId": "166",
          "avgRatingString": "4.2",
          "totalRatingsString": "101K+",
          "sla": {
              "deliveryTime": 19,
              "lastMileTravel": 1.6,
              "serviceability": "SERVICEABLE",
              "slaString": "15-20 mins",
              "lastMileTravelString": "1.6 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2025-05-02 06:55:00",
              "opened": true
          },
          "badges": {
              "imageBadges": [
                  {
                      "imageId": "bolt/big%20rx%20listing%2015%20mins%20.png",
                      "description": "bolt!"
                  }
              ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "bolt!",
                                  "imageId": "bolt/big%20rx%20listing%2015%20mins%20.png"
                              }
                          }
                      ]
                  },
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "60% OFF",
              "subHeader": "UPTO ₹120"
          },
          "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {}
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "4.2",
                  "ratingCount": "4.1K+"
              },
              "source": "GOOGLE",
              "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
          "context": "seo-data-01a12946-5588-4a55-8e8f-665ac7c85ab2"
      },
      "cta": {
          "link": "https://www.swiggy.com/city/bangalore/burger-king-koramangala-rest5934",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      "info": {
          "id": "10576",
          "name": "Pizza Hut",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/9/37221546-c3e3-46b7-95f7-dbbe3accbf71_10576.jpg",
          "locality": "6th Block",
          "areaName": "Koramangala",
          "costForTwo": "₹350 for two",
          "cuisines": [
              "Pizzas"
          ],
          "avgRating": 4.3,
          "parentId": "721",
          "avgRatingString": "4.3",
          "totalRatingsString": "21K+",
          "sla": {
              "deliveryTime": 25,
              "lastMileTravel": 0.7,
              "serviceability": "SERVICEABLE",
              "slaString": "20-25 mins",
              "lastMileTravelString": "0.7 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2025-05-02 03:00:00",
              "opened": true
          },
          "badges": {},
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "50% OFF",
              "subHeader": "UPTO ₹100"
          },
          "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {}
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "4.6",
                  "ratingCount": "3.5K+"
              },
              "source": "GOOGLE",
              "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
          "context": "seo-data-01a12946-5588-4a55-8e8f-665ac7c85ab2"
      },
      "cta": {
          "link": "https://www.swiggy.com/city/bangalore/pizza-hut-6th-block-koramangala-rest10576",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      "info": {
          "id": "65797",
          "name": "Leon's - Burgers & Wings (Leon Grill)",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/14/33bfb682-d5fa-4054-9e2c-31911e34ebf6_65797.jpg",
          "locality": "Koramangala",
          "areaName": "Koramangala",
          "costForTwo": "₹300 for two",
          "cuisines": [
              "American",
              "Snacks",
              "Turkish",
              "Portuguese",
              "Continental"
          ],
          "avgRating": 4.5,
          "parentId": "371281",
          "avgRatingString": "4.5",
          "totalRatingsString": "56K+",
          "sla": {
              "deliveryTime": 23,
              "lastMileTravel": 1.4,
              "serviceability": "SERVICEABLE",
              "slaString": "20-25 mins",
              "lastMileTravelString": "1.4 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2025-05-02 04:00:00",
              "opened": true
          },
          "badges": {
              "imageBadges": [
                  {
                      "imageId": "bolt/big%20rx%20listing%2015%20mins%20.png",
                      "description": "bolt!"
                  },
                  {
                      "imageId": "Rxawards/_CATEGORY-Burger.png",
                      "description": "Delivery!"
                  }
              ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "bolt!",
                                  "imageId": "bolt/big%20rx%20listing%2015%20mins%20.png"
                              }
                          },
                          {
                              "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Burger.png"
                              }
                          }
                      ]
                  },
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "ITEMS",
              "subHeader": "AT ₹69"
          },
          "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {}
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "4.5",
                  "ratingCount": "4.7K+"
              },
              "source": "GOOGLE",
              "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
          "context": "seo-data-01a12946-5588-4a55-8e8f-665ac7c85ab2"
      },
      "cta": {
          "link": "https://www.swiggy.com/city/bangalore/leons-burgers-and-wings-leon-grill-koramangala-rest65797",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      "info": {
          "id": "229",
          "name": "Meghana Foods",
          "cloudinaryImageId": "xqwpuhgnsaf18te7zvtv",
          "locality": "Koramangala",
          "areaName": "Koramangala",
          "costForTwo": "₹500 for two",
          "cuisines": [
              "Biryani",
              "Andhra",
              "South Indian",
              "Chinese",
              "Seafood"
          ],
          "avgRating": 4.6,
          "parentId": "635",
          "avgRatingString": "4.6",
          "totalRatingsString": "184K+",
          "sla": {
              "deliveryTime": 17,
              "lastMileTravel": 1.4,
              "serviceability": "SERVICEABLE",
              "slaString": "15-20 mins",
              "lastMileTravelString": "1.4 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2025-05-02 02:00:00",
              "opened": true
          },
          "badges": {
              "imageBadges": [
                  {
                      "imageId": "bolt/big%20rx%20listing%2015%20mins%20.png",
                      "description": "bolt!"
                  },
                  {
                      "imageId": "Rxawards/_CATEGORY-Biryani.png",
                      "description": "Delivery!"
                  }
              ]
          },
          "isOpen": true,
          "aggregatedDiscountInfoV2": {},
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "bolt!",
                                  "imageId": "bolt/big%20rx%20listing%2015%20mins%20.png"
                              }
                          },
                          {
                              "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Biryani.png"
                              }
                          }
                      ]
                  },
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {}
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "4.3",
                  "ratingCount": "21K+"
              },
              "source": "GOOGLE",
              "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
          "context": "seo-data-01a12946-5588-4a55-8e8f-665ac7c85ab2"
      },
      "cta": {
          "link": "https://www.swiggy.com/city/bangalore/meghana-foods-koramangala-rest229",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      "info": {
          "id": "156119",
          "name": "The Good Bowl",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/15/533c2673-3751-4ab5-b938-61345e683c49_156119.jpg",
          "locality": "Jakkasandra",
          "areaName": "Hsr Layout 5th Sector",
          "costForTwo": "₹400 for two",
          "cuisines": [
              "Biryani",
              "Pastas",
              "Punjabi",
              "Desserts",
              "Beverages"
          ],
          "avgRating": 4.4,
          "parentId": "7918",
          "avgRatingString": "4.4",
          "totalRatingsString": "2.2K+",
          "sla": {
              "deliveryTime": 23,
              "lastMileTravel": 2.4,
              "serviceability": "SERVICEABLE",
              "slaString": "20-25 mins",
              "lastMileTravelString": "2.4 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2025-05-01 23:59:00",
              "opened": true
          },
          "badges": {
              "textExtendedBadges": [
                  {
                      "iconId": "guiltfree/GF_Logo_android_3x",
                      "shortDescription": "options available",
                      "fontColor": "#7E808C"
                  }
              ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "",
                                  "fontColor": "#7E808C",
                                  "iconId": "guiltfree/GF_Logo_android_3x",
                                  "shortDescription": "options available"
                              }
                          }
                      ]
                  }
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "₹125 OFF",
              "subHeader": "ABOVE ₹399",
              "discountTag": "FLAT DEAL"
          },
          "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {}
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "--"
              }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
          "context": "seo-data-01a12946-5588-4a55-8e8f-665ac7c85ab2"
      },
      "cta": {
          "link": "https://www.swiggy.com/city/bangalore/the-good-bowl-jakkasandra-hsr-layout-5th-sector-rest156119",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      "info": {
          "id": "23678",
          "name": "McDonald's",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/20/9cf0f783-d73f-4cb8-993e-8031bf95f039_23678.jpg",
          "locality": "5th Block",
          "areaName": "Koramangala",
          "costForTwo": "₹400 for two",
          "cuisines": [
              "Burgers",
              "Beverages",
              "Cafe",
              "Desserts"
          ],
          "avgRating": 4.4,
          "parentId": "630",
          "avgRatingString": "4.4",
          "totalRatingsString": "64K+",
          "sla": {
              "deliveryTime": 17,
              "lastMileTravel": 1.3,
              "serviceability": "SERVICEABLE",
              "slaString": "15-20 mins",
              "lastMileTravelString": "1.3 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2025-05-02 04:30:00",
              "opened": true
          },
          "badges": {
              "imageBadges": [
                  {
                      "imageId": "bolt/big%20rx%20listing%2015%20mins%20.png",
                      "description": "bolt!"
                  },
                  {
                      "imageId": "Ratnesh_Badges/Rx_Awards_2025/Bolt.png",
                      "description": "Delivery!"
                  }
              ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "bolt!",
                                  "imageId": "bolt/big%20rx%20listing%2015%20mins%20.png"
                              }
                          },
                          {
                              "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Ratnesh_Badges/Rx_Awards_2025/Bolt.png"
                              }
                          }
                      ]
                  },
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "ITEMS",
              "subHeader": "AT ₹129"
          },
          "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {}
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "--"
              }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
          "context": "seo-data-01a12946-5588-4a55-8e8f-665ac7c85ab2"
      },
      "cta": {
          "link": "https://www.swiggy.com/city/bangalore/mcdonalds-5th-block-koramangala-rest23678",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  }
];
const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <input type="text" placeholder="Search" />
        <button>Search</button>
      </div>
      <div className="restaurant-container">
        <RestaurantCard resObj={restaurantList[0]}/>
        <RestaurantCard resObj={restaurantList[1]}/>
        <RestaurantCard resObj={restaurantList[2]}/>
        <RestaurantCard resObj={restaurantList[3]}/>
        <RestaurantCard resObj={restaurantList[4]}/>
        <RestaurantCard resObj={restaurantList[5]}/>
        <RestaurantCard resObj={restaurantList[6]}/>
        <RestaurantCard resObj={restaurantList[7]}/>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
