import { useState } from "react"
import { useEffect } from "react";


const Person = () => {
    const [users,setUsers]=useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(data=>{
            setUsers(data)
        })
    },[])


    return (
        <div>
            <h1>Cohorte FT36a</h1>
            <label>Instructor: Jorge Vega</label>
            <p>Alumno: El mejor de Henry🧡💚</p>
            <hr/>

            <h2>Users</h2>
            <ul>
                {
                    users.map(user=>{
                        return(
                            <li key={user.id}>{user.name}</li>
                        )
                    })
                }
            </ul>

        </div>
    )
}
export default Person;