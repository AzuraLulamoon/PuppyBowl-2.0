import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import AllPlayers from "./AllPlayers";


export default function SinglePlayer() {

    const [ players, setPlayers ] = useState([])
    const { name } = useParams()

    useEffect(() => {
        
        async function fetchData() {
            const response = await fetch()
            const data = await response.json()

            console.log(data)

        }
    })

    return <>
        
    </>
}