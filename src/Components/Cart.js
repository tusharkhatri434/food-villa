import {useSelector} from "react-redux";
import { ITEM_IMG_CDN_URL } from "../Assets/Constant";
const card = () =>{

    const cartItems = useSelector((store)=>store.cart.items);
    console.log(cartItems);
    return (
      <>
        <h1 className="text-2xl">cart</h1>
        <div className="flex flex-wrap">
          {cartItems.map((item) => (
            <div className="w-1/4">
              <div className="flex bg-gray-300 flex-col m-2" key={item.id}>
                <img
                  className="w-96"
                  src={ITEM_IMG_CDN_URL + item.imageId}
                ></img>
                <p>{item.name}</p>
              </div>
            </div>
          ))}
        </div>
      </>
    );
}
export default card;