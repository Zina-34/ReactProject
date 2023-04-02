import React, { useEffect, useState } from 'react'
import '../component/table.css';
import Navbar from './Navbar';
import TableList from './TableList';
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
                    <th >Name</th>
                    <th >Email</th>
                    <th >Phone</th>
                    <th >Address</th>
                    <th >Operation</th>
                </tr>
                </thead>
                <tbody>
                    {users.map(user => <TableList user={user}  key ={user.id} setUsers={setUsers}/> )}
                    
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
