import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // import useParams for read `resId`
import Shimer from "./Shimer";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/CartSlice";
import {
  swiggy_menu_api_URL,
  IMG_CDN_URL,
  ITEM_IMG_CDN_URL,
  MENU_ITEM_TYPE_KEY,
  RESTAURANT_TYPE_KEY,
} from "../Assets/Constant";

const RestaurantMenu = () => {
  const { resId } = useParams(); // call useParams and get value of restaurant id using object destructuring
  const [restaurant, setRestaurant] = useState(null); // call useState to store the api data in res
  const [menuItems, setMenuItems] = useState([]);
     
  const dispatch = useDispatch(); // addItems , rmoveItems, clearItems frm redux store--

   const cartHandler =(item)=>{
        
       dispatch(addItem(item));
   }

  useEffect(() => {
    getRestaurantInfo(); // call getRestaurantInfo function so it fetch api data and set data in restaurant state variable
  }, []);


  async function getRestaurantInfo() {
    try {
      const response = await fetch(swiggy_menu_api_URL + resId);
      const json = await response.json();

      // Set restaurant data
      const restaurantData =
        json?.data?.cards
          ?.map((x) => x.card)
          ?.find((x) => x && x.card["@type"] === RESTAURANT_TYPE_KEY)?.card
          ?.info || null;
      setRestaurant(restaurantData);

      // Set menu item data
      const menuItemsData =
        json?.data?.cards
          .find((x) => x.groupedCard)
          ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map((x) => x.card?.card)
          ?.filter((x) => x["@type"] == MENU_ITEM_TYPE_KEY)
          ?.map((x) => x.itemCards)
          .flat()
          .map((x) => x.card?.info) || [];

      const uniqueMenuItems = [];
      menuItemsData.forEach((item) => {
        if (!uniqueMenuItems.find((x) => x.id === item.id)) {
          uniqueMenuItems.push(item);
        }
      });
      setMenuItems(uniqueMenuItems);
    } catch (error) {
      setMenuItems([]);
      setRestaurant(null);
      console.log(error);
    }
  }

  return !restaurant ? (
    <Shimer />
  ) : (
    <div sclassName="flex flex-wrap gap-6 flex-col items-center bg-slate-100 w-full">
      <div className="flex justify-center gap-5  bg-slate-300 py-6 flex-wrap text-2xl  w-full ">
        <img
          className="w-64 rounded-2xl "
          src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
          alt={restaurant?.name}
        />
        <div className="">
          <h2 className="font-bold text-3xl">{restaurant?.name}</h2>
          <p className="restaurant-tags">{restaurant?.cuisines?.join(", ")}</p>
          <div className="">
            <div className>
              <span className="text-black-400 font-medium">
                {restaurant?.avgRating}❇️
              </span>
            </div>
            <div className="text-gray-600 text-xl my-2">
              {restaurant?.sla?.slaString}
            </div>
            <div>{restaurant?.costForTwoMessage}</div>
          </div>
        </div>
      </div>
         {/* <button onClick={cartHandler}>add cart</button> */}
      <div className=" w-4/5">
        <div className=" flex flex-col items-center ">
          <div className="flex items-center bg-black text-white p-1 rounded-lg">
            <h3 className="menu-title m-2">Recommended</h3>
            <p className="menu-count">{menuItems.length} - ITEMS</p>
          </div>
          <div data-testid="resMenu" className="w-4/5">
            {menuItems.map((item) => (
              <>
                <div className="flex justify-between mt-3" key={item?.id}>
                  <div className="w-7/12 mr-4">
                    <h3 className="text-xl font-semibold ">{item?.name}</h3>
                    <p className="item-cost">
                      {item?.price > 0
                        ? new Intl.NumberFormat("en-IN", {
                            style: "currency",
                            currency: "INR",
                          }).format(item?.price / 100)
                        : " "}
                    </p>
                    <p className="text-sm text-slate-700 max-w-md mt-4">{item?.description}</p>
                  </div>
                  <div className="">
                    {item?.imageId && (
                      <img
                        className="h-28 w-28 rounded-xl"
                        src={ITEM_IMG_CDN_URL + item?.imageId}
                        alt={item?.name}
                      />
                    )}
                    <button data-testid="Add-Btn" className="bg-green-300 font-semibold text-sm py-2 px-4 mt-1 ml-3 rounded-md"
                      onClick={()=>{
                        cartHandler(item)
                      }}>
                      ADD +
                    </button>
                  </div>
                </div>
                {/* <hr className="my-3 border-black"></hr> */}
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
