const Shimer=()=>{


    return(
       <div data-testid="shimer" className="flex flex-wrap h-full w-full justify-center mt-24">
        {Array(20).fill("").map((e,index)=>(
            <div className="bg-slate-300 w-64 h-96 m-2 rounded-md " key={index}>
                
            </div>))}
       </div>
    );
}

export default Shimer;