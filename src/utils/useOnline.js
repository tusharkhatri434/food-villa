import { useEffect, useState } from "react";

const useOnline=()=>{
      const[isOnline,setIsOnline] = useState(true);
    useEffect(()=>{

        const handlerOnline=()=>{
            setIsOnline(true);
        }

        const handlerOffline = () =>{
            setIsOnline(false);
        }

        window.addEventListener("online",handlerOnline)
        window.addEventListener("offline",handlerOffline);

        return () =>{   // retun only run in destroy or end. when we componentwillunmount change page or component or path to new componrnt
            window.removeEventListener("online",handlerOnline);
            window.removeEventListener("offline",handlerOffline);
        }
    },[]);

     return isOnline;
}


export default useOnline;