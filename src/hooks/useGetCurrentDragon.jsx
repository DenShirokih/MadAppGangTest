import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getDragonsById } from "services/fetchAPI";

export const useGetDragonsById = () => {
    const {infoId} = useParams()
    const [dragon, setDragon] = useState(null)

    useEffect(()=>{
        getDragonsById(infoId).then(setDragon)
    },[infoId])

    return dragon
}