import React from 'react'
import {ExperimentOutlined} from "@ant-design/icons";
import "./SingleUser.css"
const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

const SingleUser = ({user}) => {
  return (
    <div className='single-user'>
      <img src={user.image} alt="" />
        <div className='user-info'>
            <h3>{user.name}</h3>
            <h5>{user.species} <br/>{user.status} <br/>{user.origin.name}</h5>
           
            <p className='user-location'>{user.location.name}</p>                                   
            <ExperimentOutlined />
       

        </div>
    </div>
  )
}

export default SingleUser
