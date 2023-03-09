import { Link, NavLink } from "react-router-dom";

const Home =()=>{
    return (
        <>
            <h1>Este es el componente Home</h1>
            <button>
                <Link to="about">ABOUT</Link>
            </button>
            <NavLink to="profile"
                style={({ isActive })=> isActive ? {backgroundColor: 'red'}:{backgroundColor: 'pink', color:'black'}}
            >PROFILE</NavLink>

            
        </>

    )
}

export default Home;