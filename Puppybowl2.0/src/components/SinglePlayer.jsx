import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";


export default function SinglePlayer() {

    const [ player, setPlayer ] = useState({})
    const { id } = useParams()

    useEffect(() => {
        
        async function fetchData() {
            const response = await fetch(`https:fsa-puppy-bowl.herokuapp.com/api/2306-FTB-ET-WEB-FT/players/${id}`)
            const data = await response.json()

            console.log(data)
            setPlayer(cleanPlayer(data))
        }
        fetchData()

        console.log('fetch')

    }, [])

    function cleanPlayer(data) {

        return {
            name: data.data.player.name,
            id: data.data.player.id,
            img: data.data.player.imageUrl,
            breed: data.data.player.breed
        }
    }

console.log(player)

return <div className="singlePlayer">
    
    <h1>{player.name}</h1>
    
    <h4>{player.breed}</h4>

    <h4>{player.team}</h4>
    
    <img src={player.img}/>

    <Link to='/'><button>Return</button></Link>
</div>
}