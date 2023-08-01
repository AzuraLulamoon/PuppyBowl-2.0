import { useEffect } from "react";
import { useState } from "react";

const baseUrl = 'https://fsa-puppy-bowl.herokuapp.com/api/2306-FTB-ET-WEB-FT/players'

export default function AllPlayers() {
    
    const [ AllPlayer, setAllPlayer ] = useState([])

    useEffect(() => {
        async function fetchData() {
            
            try {
                const response = await fetch(baseUrl)
                const data = response.json();

                console.log(data)
                setAllPlayer(data.data.players);
            } catch(err) {
                console.error(err);
            }
        }

        fetchData()
    }, [])

    console.log(AllPlayer)
    return <>
        {AllPlayer.map((p, index) => <div key={index} className="allPlayer">
            <h1>{p.name}</h1>
        </div>)}
    </>
}