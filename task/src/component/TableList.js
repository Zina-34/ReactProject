import React from 'react'
import { useNavigate } from 'react-router-dom';
import { removeUser , getTableOfList } from './localstorage';

const TableList = ({user , setUsers}) => {
  const {id, name, email, address, phone} = user;

  const navigate = useNavigate();

  const deleteUser = () =>  {
    removeUser(id);
    setUsers(getTableOfList());
  }

  return (
    <>
      <tr>
        <th>{name}</th>
        <th>{email}</th>
        <th>{phone}</th>
        <th>{address}</th>
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
