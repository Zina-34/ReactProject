import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { removeUser , getTableOfList } from './localstorage';
import { Link } from 'react-router-dom';

const TableList = ({user , setUsers}) => {
  const {id, name} = user;

  const navigate = useNavigate();

  const deleteUser = () =>  {
    removeUser(id);
    setUsers(getTableOfList());
  }


  return (
    <>
      <tr>
        <th>{name}</th>
        <th><Link to="/profiles">Visit the page</Link></th>
        
        <th>
            <div className="operation">
                <span type="button" onClick={() => navigate (`/edit-user/${id}`)} className="Edit"><i class="uil uil-edit operation"></i> </span>
                <span type="button" onClick={() => deleteUser()} className="Delete"><i class="uil uil-trash-alt operation"></i> </span>
            </div>
        </th>
      </tr>
    </>
  )
}

export default TableList
