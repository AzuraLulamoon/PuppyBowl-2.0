import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// const baseUrl = ['https://fsa-puppy-bowl.herokuapp.com/api/2306-FTB-ET-WEB-FT/players']

export default function AllPlayers() {
    
    const [ players, setPlayers ] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
            
            try {
                const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2306-FTB-ET-WEB-FT/players')
                const data = response.json();

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
                onClick={() => navigate(`/${player.name}`)}>
                <h1>{player.name}</h1>
        </div>
        )}
    </>
}