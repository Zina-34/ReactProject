import React, { useEffect, useState } from 'react'
import '../component/table.css';
import Navbar from './Navbar';
import ProjectTable from './ProjectTable';
import { getTableOfList } from './localstorage';


const Table = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        setUsers(getTableOfList());

    }, []);

   return (
    <>
        <Navbar />

        {
            users.length > 0 ? (
                <section className='card tablePage'>
            <table className="table table-hover">
                <thead>
                <tr>
                    
                    <th>Name</th>
                    <th>Profile</th>
                    <th>operation</th>
                    
                </tr>
                </thead>
                <tbody>
                    {users.map(user => <ProjectTable user={user}  key ={user.id} setUsers={setUsers}/> )}
                    
                </tbody>
                
            </table>
            </section>

            ):(
                
                <h3 className="text">No Users</h3>
            )
        }

       
      
    </>
  )
}

export default Table
