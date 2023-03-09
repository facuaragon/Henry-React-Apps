import { Link, NavLink, Outlet } from "react-router-dom";

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

            <Outlet/>
        </>

    )
}

export default Home;