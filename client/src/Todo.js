import React, { useEffect, useState } from 'react';
import {
    Link,
    useLocation
} from "react-router-dom";


const Todo = () => {
        const [todo, setTodo] = useState([]);
        const queryPage = useQuery().get('page')|| 0;
        
        useEffect(()=>{
            fetch(`http://localhost:4000/?page=${Number(queryPage)}`)
            .then(res=>res.json()).then(data=>{
            setTodo(data.data)
            })
        },[queryPage])
    return (
        <div>
            {
                todo.map(t=><h3 key={t._id}>{t.title}</h3>)
            }
            <Link to={`/?page=${Number(queryPage)-1}`} >
                Previous
            </Link>
            <br/>
            <Link to={`/?page=${Number(queryPage)+1}`} >
                Next
            </Link>
        </div>
    );
};
function useQuery() {
  return new URLSearchParams(useLocation().search);
}
export default Todo;