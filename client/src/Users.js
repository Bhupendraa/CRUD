import axios  from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Users = () => {
    const[users,setUser] = useState([])
       
        useEffect(()=>{
            axios.get('http://localhost:3000')
            .then(result =>setUser(result.data))
            .catch(err=>console.log(err))
        },[])



   
  return (
    <div>

        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <Link to="/createUser" className='btn btn-success'>Add +</Link>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user)=>(
                                <tr>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.age}</td>
                                    <td>
                                    <Link to={`/getUser ${user._id}/`} className='btn btn-success'>Update user</Link>
                                        
                                        <button>Delete</button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>

            </div>

        </div>
    </div>
  )
}


export default Users