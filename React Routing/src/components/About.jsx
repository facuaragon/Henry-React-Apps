import { useLocation, useNavigate } from "react-router-dom";

const About = () => {
    const location = useLocation();
    console.log(location);

    const navigate = useNavigate();
    console.log(navigate);
    
    return (
        <>
            <h1>Este es el componente About</h1>
            <p>Estamos aprendiendo Routing</p>
        </>
    )
}

export default About;