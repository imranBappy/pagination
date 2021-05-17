import React, { useEffect, useState } from 'react';
import {
    Link, useLocation
} from "react-router-dom";
import './user.css';

const User = () => {
        const [user, setUser] = useState([]);
        const queryPage = useQuery().get('page')|| 0;
        useEffect(()=>{
            fetch(`http://localhost:4000/user?page=${Number(queryPage)}`)
            .then(res=>res.json()).then(data=>{
                setUser(data.users)
            })
        },[queryPage])
    return (
        <div style={{width:1200, margin:'0 auto'}}>
        <div className="container">
        <table border="1px">
            <thead>
                <tr>
                    <th>Username</th>
                    <th>Balance</th>
                    <th>Club</th>
                    <th>Email</th>
                    <th>Sponsor</th>
                    <th>Active</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody id="table-body">
                {
                user.map(e=><tr key={e._id}>
                    <td>{e.username}</td>
                    <td>{e.balance}</td>
                    <td>{e.club}</td>
                    <td>{e.email}</td>
                    <td>{e.Sponsor}</td>
                    <td>{e.active? "Yes": "No"}</td>
                    <td>{e.status? "Yes": "No"}</td>
                </tr>)
                }
                <tr>
                    <td>
                        <Link to={`/user?page=${Number(queryPage)-1}`} >
                            Previous
                        </Link>
                        <Link to={`/user?page=${Number(queryPage)+1}`} >
                Next
            </Link>
                    </td>

                </tr>
            </tbody>
        </table>
    </div>
            

            {/* {
                todo.map(t=><h3 key={t._id}>{t.title}</h3>)
            } */}
            {/* <Link to={`/?page=${Number(queryPage)-1}`} >
                Previous
            </Link>
            <br/>
            <Link to={`/?page=${Number(queryPage)+1}`} >
                Next
            </Link> */}
        </div>
    );
};
function useQuery() {
  return new URLSearchParams(useLocation().search);
}
export default User;