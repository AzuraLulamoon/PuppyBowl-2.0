import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <nav className="navy">
            <h1>Welcome to PuppyBowl!</h1>
                <ul className="navTitles">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/AllPlayers'>All Players</Link></li>
                </ul>
        </nav>
    )
}