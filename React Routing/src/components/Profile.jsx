import { Link, Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";

const Profile = () => {
    const params = useParams();
    console.log(params);
    
    return (
        <div>
            <h1>Este es el perfil de Facundo</h1>
            <h2>Cohorte: FT36a</h2>
            <button>
                <Link to='person'>Person</Link>
            </button>
            <button>
                <Link to="">Back</Link>
            </button>
            <button>
                <Link to="/">Home</Link>
            </button>
            <Outlet/>
        </div>
    )
}

export default Profile;