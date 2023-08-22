import { NavLink } from "react-router-dom";
import './NavBar.css';

export default function NavBar (){

    return (
        <nav className="NavBar">
            <div className="title">Stranger's Things</div>
            <div className="container"></div>
            <div className="nav-links">
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Posts">Posts</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Login">Login</NavLink>
                    </li>
                    <li>
                        <NavLink to = '/register'> Register </NavLink>
                    </li>
                    <li>
                        <NavLink to="/CreatePost">Create Post</NavLink>
                    </li>
                </ul>
            </div>
            <div className="leftSide">
            <div className="search-bar">
            <input type="text" placeholder="Search..." />
            <button>Search</button>
            </div>
            </div>
        </nav>
    )
}