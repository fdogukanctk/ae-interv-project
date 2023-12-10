import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios';
import SingleUser from './SingleUser';
import "./UserList.css"
const UserList = (props) => {
    const[users,setUsers]= useState([]);
//fetch api
    // useEffect(() => {
    //     fetch('https://rickandmortyapi.com/api/character')
    //     .then(response => response.json())//json çevirilir
    //     .then(response => setUsers(response));
    // },[]);
    // useEffect(()=>{
    //     axios.get('https://rickandmortyapi.com/api/character')
    //     .then(response => setUsers(response.data));
    // },[])
    const fetchUsers = async() => {
        const response = await axios.get ('https://rickandmortyapi.com/api/character')
        setUsers(response.data.results)
    }
   useEffect(()=>{
    fetchUsers()
   },[])
    
     return (
    <div className='users'>
        <ul>
            {users.map((user,id)=>(
                <li>
                    {' '}
                    <SingleUser user={user} key={id}/></li>
            ))}
            
        </ul>
    </div>
  )
}

export default UserList
