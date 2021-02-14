import { useState, useEffect } from "react"
import { getGifst } from "../handlers/getGifs";


export const useFetchGifs = ( category ) => {
    
    const [state, setstate] = useState({
        data:[],
        loading: true
        });

    useEffect( () => {
        getGifst(category).
        then(imgs=>
            setTimeout(()=>{
                setstate({
                data:imgs,
                loading:false
            })
            },2000)
        );
    }, [ category ])

    return state;
};