import { useState,useEffect} from "react";
import { restaurantList} from "../Assets/Constant";
import Card from "./Card";
import Shimmer from './Shimer'
import { Link } from "react-router-dom";


function filterFun(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.data?.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return filterData;
}


// body----------------------
const Body = () => {
  const [searchTxt, setSearchTxt] = useState("");
  const [restaurantData, setRestaurantData] = useState();
  const [Restaurants, setallRestaurants] = useState();

  
   useEffect(()=>{
    setTimeout(()=>{
      getResturant();
    },600)
   },[])
    
   const getResturant = () =>{

    // const data = fetch(
    //   "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
    // );

    setallRestaurants(restaurantList)
    setRestaurantData(restaurantList);
   }

   if(!restaurantData){
    return <Shimmer />
   }
 
   const goToTop = () => {
    window.scrollTo({
        top: 0,
    });
};
  

  return (
    <>
      <div className="flex justify-center mt-6">
        <input data-testid="search-input"
          className="ml-5  w-2/4 rounded-lg p-1 text-xl bg-slate-200 "
          type="text"
          value={searchTxt}
          placeholder="Search here.."
          onChange={(e) => {
            setSearchTxt(e.target.value);
          }}
        ></input>
        <button
          data-testid="search-btn"
          type="button"
          className="ml-4 px-2 py-1 text-lg rounded-md bg-black text-white"
          onClick={() => {
            //  need to filter data
            const dataList = filterFun(searchTxt, Restaurants);
            //  return that data
            searchTxt === ""
              ? setRestaurantData(restaurantList)
              : setRestaurantData(dataList);
          }}
        >
          Search
        </button>
      </div>

      <div
        data-testid="res-list"
        className="flex flex-wrap justify-center mt-10"
      >
        {restaurantData.map((items) => {
          return (
            <Link
              onClick={goToTop}
              to={"/resturant/" + items.data.id}
              key={items.data.id}
            >
              <Card {...items.data} />
            </Link>
          );
        })}
      </div>
    </>
  );
};
export default Body;
