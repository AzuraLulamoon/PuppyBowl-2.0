import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AllPlayers() {
    
    const [ players, setPlayers ] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
            
            try {
                const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2306-FTB-ET-WEB-FT/players')
                const data = await response.json();

                console.log(data)
                setPlayers(data.data.players);
                
            } catch(err) {
                console.error(err);
            }
        }

        fetchData()
    }, [])

    return <>
        {players.map((player, index) => 
            <div key={index} className="allPlayers" 
                onClick={() => navigate(`/${player.id}`)}>
                <h1>{player.name}</h1>
                <img id='imageAll' src={player.imageUrl}/>
        </div>
        )}
    </>
}