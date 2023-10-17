import { IMG_CDN_URL } from "../Assets/Constant";

const Card = ({
  cloudinaryImageId,
  name,
  cuisines,
  area,
  lastMileTravelString,
  costForTwoString,
  avgRating,
}) => {

  return (
    <div className="m-3 text-lg max-w-[250px]  p-3 shadow-md  shadow-slate-300 rounded-md flex flex-col flex-wrap">
      <img
        className=" rounded-md"
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
      />
      <h2 className="text-xl font-bold">{name}</h2>
      <h4 className="text-sm max-w-[240]">{cuisines?.slice(0,4)?.join(",")}</h4>
      <h4 className="text-sm">{area}</h4>
      <span className="text-sm flex justify-between items-center mt-2">
        <h4>
          <i className="font-semibold">❇️{avgRating} </i>
        </h4>
    
          <h4>{lastMileTravelString}</h4>
          <h4>{costForTwoString}</h4>
        </span>
    </div>
  );
};

export default Card;
