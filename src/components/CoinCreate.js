import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchuser } from "./slicer1";
import CreateCard from "./CreateCard";

export default function CoinCreate()
{
    const dispatch = useDispatch();

    const {data , loading , error} = useSelector((state)=>state.slice1);
    
    useEffect(()=>{
        dispatch(fetchuser(100));
    } , []);


    if(loading)
    {
        return <h1>Data is loading....</h1>
    }
    if(error)
    {
        return <h1>Error has occurred !!</h1>
    }
    return(
        <>
        <h1 className="heading">Top 100 Crypto Coins</h1>  
        <div className="card_collection">
            {data.map((value) => <CreateCard key={value.id} values={value}> </CreateCard>)}
        </div>
        </>   
    );
}

